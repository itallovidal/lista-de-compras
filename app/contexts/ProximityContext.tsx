import React, { createContext, useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { ProximityMode, SyncStatus, ProximityEvent } from '../types/proximity';
import { ProximityNativeModule, proximityEventEmitter } from '../lib/proximityNativeModule';
import { loadSyncSession, saveSyncSession, clearSyncSession, saveSyncEvent, getUnsyncedEvents, markEventsAsSynced } from '../lib/proximityStorage';

interface ProximityState {
  mode: ProximityMode;
  peerDeviceName: string | null;
  syncStatus: SyncStatus;
  isWifiAwareAvailable: boolean;
}

interface ProximityContextType extends ProximityState {
  enableMode: () => Promise<void>;
  disableMode: () => Promise<void>;
  sendSyncEvent: (event: ProximityEvent) => Promise<void>;
  onSyncEventReceived: ((event: ProximityEvent) => void) | null;
  setOnSyncEventReceived: (handler: ((event: ProximityEvent) => void) | null) => void;
}

export const ProximityContext = createContext<ProximityContextType | undefined>(undefined);

interface ProximityProviderProps {
  children: ReactNode;
}

export const ProximityProvider: React.FC<ProximityProviderProps> = ({ children }) => {
  const [state, setState] = useState<ProximityState>({
    mode: 'off',
    peerDeviceName: null,
    syncStatus: 'idle',
    isWifiAwareAvailable: false,
  });

  const onSyncEventReceivedRef = useRef<((event: ProximityEvent) => void) | null>(null);
  const deviceIdRef = useRef<string>('');

  useEffect(() => {
    const init = async () => {
      if (ProximityNativeModule) {
        const available = await ProximityNativeModule.isWifiAwareAvailable();
        const id = await ProximityNativeModule.getDeviceId();
        deviceIdRef.current = id;
        setState((prev) => ({ ...prev, isWifiAwareAvailable: available }));
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!proximityEventEmitter) return;

    const subscription = proximityEventEmitter.addListener(
      'onProximityEvent',
      async (event: { type: string; data?: string; peerId?: string; deviceName?: string }) => {
        switch (event.type) {
          case 'peer_discovered':
            setState((prev) => ({
              ...prev,
              peerDeviceName: event.deviceName || 'Dispositivo próximo',
            }));
            break;

          case 'connected':
            setState((prev) => ({
              ...prev,
              mode: 'connected',
              peerDeviceName: event.deviceName || prev.peerDeviceName,
              syncStatus: 'syncing',
            }));

            await sendPendingEvents();
            setState((prev) => ({ ...prev, syncStatus: 'idle' }));
            break;

          case 'data_received':
            if (event.data) {
              try {
                const syncEvent = JSON.parse(event.data) as ProximityEvent;
                onSyncEventReceivedRef.current?.(syncEvent);
              } catch (e) {
                console.error('Failed to parse sync event:', e);
              }
            }
            break;

          case 'disconnected':
          case 'connection_lost':
            setState((prev) => ({
              ...prev,
              mode: prev.mode === 'connected' ? 'discovering' : prev.mode,
              syncStatus: 'idle',
            }));
            break;
        }
      }
    );

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const appStateSubscription = AppState.addEventListener('change', async (nextAppState: AppStateStatus) => {
      if (nextAppState === 'background' && state.mode !== 'off') {
        await saveSyncSession({
          sessionId: Date.now().toString(),
          peerDeviceId: state.peerDeviceName || '',
          lastSyncPoint: Date.now(),
          status: state.mode,
        });
      }

      if (nextAppState === 'active' && state.mode === 'discovering') {
        setState((prev) => ({ ...prev, mode: 'discovering' }));
      }
    });

    return () => appStateSubscription.remove();
  }, [state.mode, state.peerDeviceName]);

  const sendPendingEvents = async () => {
    if (!ProximityNativeModule) return;

    const session = await loadSyncSession();
    const lastSyncPoint = session?.lastSyncPoint || 0;
    const pendingEvents = await getUnsyncedEvents(lastSyncPoint);

    for (const record of pendingEvents) {
      const event: ProximityEvent = {
        type: record.type,
        itemId: record.itemId,
        payload: JSON.parse(record.payload),
        timestamp: record.timestamp,
        actorId: record.actorId,
      };
      await ProximityNativeModule.sendEvent(JSON.stringify(event));
    }

    if (pendingEvents.length > 0) {
      await markEventsAsSynced(pendingEvents.map((e) => e.id));
    }
  };

  const enableMode = useCallback(async () => {
    setState((prev) => ({ ...prev, mode: 'discovering', syncStatus: 'idle' }));

    if (ProximityNativeModule) {
      try {
        await ProximityNativeModule.startDiscovery();
      } catch (error) {
        console.error('Failed to start discovery:', error);
        setState((prev) => ({ ...prev, mode: 'off' }));
      }
    }
  }, []);

  const disableMode = useCallback(async () => {
    if (ProximityNativeModule) {
      try {
        await ProximityNativeModule.stopDiscovery();
        await ProximityNativeModule.disconnect();
      } catch (error) {
        console.error('Failed to stop proximity:', error);
      }
    }

    await clearSyncSession();
    setState({
      mode: 'off',
      peerDeviceName: null,
      syncStatus: 'idle',
      isWifiAwareAvailable: state.isWifiAwareAvailable,
    });
  }, [state.isWifiAwareAvailable]);

  const sendSyncEvent = useCallback(async (event: ProximityEvent) => {
    if (!ProximityNativeModule || state.mode !== 'connected') return;

    await saveSyncEvent({
      id: `${event.itemId}-${event.timestamp}`,
      type: event.type,
      itemId: event.itemId,
      payload: JSON.stringify(event.payload),
      timestamp: event.timestamp,
      actorId: event.actorId,
      synced: false,
    });

    try {
      await ProximityNativeModule.sendEvent(JSON.stringify(event));
      await markEventsAsSynced([`${event.itemId}-${event.timestamp}`]);
    } catch (error) {
      console.error('Failed to send sync event:', error);
    }
  }, [state.mode]);

  const setOnSyncEventReceived = useCallback((handler: ((event: ProximityEvent) => void) | null) => {
    onSyncEventReceivedRef.current = handler;
  }, []);

  return (
    <ProximityContext.Provider
      value={{
        ...state,
        enableMode,
        disableMode,
        sendSyncEvent,
        onSyncEventReceived: onSyncEventReceivedRef.current,
        setOnSyncEventReceived,
      }}
    >
      {children}
    </ProximityContext.Provider>
  );
};
