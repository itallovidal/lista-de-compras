import { useEffect, useCallback } from 'react';
import { useProximity } from './useProximity';
import { useShopping } from './useShopping';
import { ProximityEvent } from '../types/proximity';

export function useProximitySync() {
  const { mode, sendSyncEvent, setOnSyncEventReceived } = useProximity();
  const { list, addItem, addItems, updateItem, removeItem } = useShopping();

  const handleIncomingEvent = useCallback((event: ProximityEvent) => {
    switch (event.type) {
      case 'item-added':
        if (event.payload.name) {
          addItem(event.payload.name as string);
        }
        break;

      case 'item-updated':
        if (event.itemId && event.payload) {
          updateItem(event.itemId, event.payload as Record<string, unknown>);
        }
        break;

      case 'item-removed':
        removeItem(event.itemId);
        break;

      case 'item-marked':
        if (event.itemId && event.payload) {
          updateItem(event.itemId, event.payload as Record<string, unknown>);
        }
        break;
    }
  }, [addItem, updateItem, removeItem]);

  useEffect(() => {
    setOnSyncEventReceived(handleIncomingEvent);
  }, [handleIncomingEvent, setOnSyncEventReceived]);

  const emitItemAdded = useCallback((name: string) => {
    if (mode !== 'connected') return;

    sendSyncEvent({
      type: 'item-added',
      itemId: Date.now().toString(),
      payload: { name },
      timestamp: Date.now(),
      actorId: 'local',
    });
  }, [mode, sendSyncEvent]);

  const emitItemUpdated = useCallback((id: string, updates: Record<string, unknown>) => {
    if (mode !== 'connected') return;

    sendSyncEvent({
      type: 'item-updated',
      itemId: id,
      payload: updates,
      timestamp: Date.now(),
      actorId: 'local',
    });
  }, [mode, sendSyncEvent]);

  const emitItemRemoved = useCallback((id: string) => {
    if (mode !== 'connected') return;

    sendSyncEvent({
      type: 'item-removed',
      itemId: id,
      payload: {},
      timestamp: Date.now(),
      actorId: 'local',
    });
  }, [mode, sendSyncEvent]);

  return {
    emitItemAdded,
    emitItemUpdated,
    emitItemRemoved,
  };
}
