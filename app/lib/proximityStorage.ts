import AsyncStorage from '@react-native-async-storage/async-storage';
import { SyncEventRecord, SyncSessionRecord } from '../types/proximity';

const SYNC_EVENTS_KEY = '@proximity:sync-events';
const SYNC_SESSION_KEY = '@proximity:session';

export const saveSyncEvent = async (event: SyncEventRecord): Promise<void> => {
  try {
    const events = await loadSyncEvents();
    await AsyncStorage.setItem(
      SYNC_EVENTS_KEY,
      JSON.stringify([...events, event])
    );
  } catch (error) {
    console.error('Error saving sync event:', error);
  }
};

export const loadSyncEvents = async (): Promise<SyncEventRecord[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(SYNC_EVENTS_KEY);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as SyncEventRecord[];
    }
    return [];
  } catch (error) {
    console.error('Error loading sync events:', error);
    return [];
  }
};

export const getUnsyncedEvents = async (sinceTimestamp: number): Promise<SyncEventRecord[]> => {
  const events = await loadSyncEvents();
  return events.filter(
    (event) => !event.synced && event.timestamp > sinceTimestamp
  );
};

export const markEventsAsSynced = async (eventIds: string[]): Promise<void> => {
  try {
    const events = await loadSyncEvents();
    const updatedEvents = events.map((event) =>
      eventIds.includes(event.id) ? { ...event, synced: true } : event
    );
    await AsyncStorage.setItem(SYNC_EVENTS_KEY, JSON.stringify(updatedEvents));
  } catch (error) {
    console.error('Error marking events as synced:', error);
  }
};

export const clearSyncedEvents = async (): Promise<void> => {
  try {
    const events = await loadSyncEvents();
    const pendingEvents = events.filter((event) => !event.synced);
    await AsyncStorage.setItem(SYNC_EVENTS_KEY, JSON.stringify(pendingEvents));
  } catch (error) {
    console.error('Error clearing synced events:', error);
  }
};

export const saveSyncSession = async (session: SyncSessionRecord): Promise<void> => {
  try {
    await AsyncStorage.setItem(SYNC_SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    console.error('Error saving sync session:', error);
  }
};

export const loadSyncSession = async (): Promise<SyncSessionRecord | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(SYNC_SESSION_KEY);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as SyncSessionRecord;
    }
    return null;
  } catch (error) {
    console.error('Error loading sync session:', error);
    return null;
  }
};

export const clearSyncSession = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(SYNC_SESSION_KEY);
  } catch (error) {
    console.error('Error clearing sync session:', error);
  }
};
