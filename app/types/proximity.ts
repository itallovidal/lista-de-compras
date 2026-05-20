export type ProximityMode = 'off' | 'discovering' | 'connected' | 'reconnecting';

export type SyncStatus = 'idle' | 'syncing' | 'conflict';

export interface ProximitySession {
  mode: ProximityMode;
  peerDeviceName: string | null;
  syncStatus: SyncStatus;
}

export interface ProximityEvent {
  type: 'item-added' | 'item-updated' | 'item-removed' | 'item-marked';
  itemId: string;
  payload: Record<string, unknown>;
  timestamp: number;
  actorId: string;
}

export interface SyncEventRecord {
  id: string;
  type: ProximityEvent['type'];
  itemId: string;
  payload: string;
  timestamp: number;
  actorId: string;
  synced: boolean;
}

export interface SyncSessionRecord {
  sessionId: string;
  peerDeviceId: string;
  lastSyncPoint: number;
  status: ProximityMode;
}
