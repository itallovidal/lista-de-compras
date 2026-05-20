import { NativeEventEmitter, NativeModules, NativeModule } from 'react-native';
import { ProximityEvent } from '../types/proximity';

const { ProximityModule } = NativeModules;

interface ProximityModuleType extends NativeModule {
  startDiscovery: () => Promise<void>;
  stopDiscovery: () => Promise<void>;
  connectToPeer: (peerId: string) => Promise<void>;
  disconnect: () => Promise<void>;
  sendEvent: (eventData: string) => Promise<void>;
  isWifiAwareAvailable: () => Promise<boolean>;
  getDeviceId: () => Promise<string>;
}

const proximityModule = ProximityModule as ProximityModuleType | undefined;

export const proximityEventEmitter = proximityModule
  ? new NativeEventEmitter(proximityModule)
  : null;

export const ProximityNativeModule = proximityModule;
