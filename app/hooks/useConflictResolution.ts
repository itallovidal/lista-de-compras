import { useState, useCallback } from 'react';
import { useProximity } from '../hooks/useProximity';

interface ConflictInfo {
  itemId: string;
  localTimestamp: number;
  remoteTimestamp: number;
  resolvedBy: 'local' | 'remote';
}

export function useConflictResolution() {
  const [lastConflict, setLastConflict] = useState<ConflictInfo | null>(null);
  const [conflictCount, setConflictCount] = useState(0);

  const resolveConflict = useCallback((
    itemId: string,
    localTimestamp: number,
    remoteTimestamp: number
  ): 'local' | 'remote' => {
    const resolvedBy = remoteTimestamp > localTimestamp ? 'remote' : 'local';

    setLastConflict({ itemId, localTimestamp, remoteTimestamp, resolvedBy });
    setConflictCount((prev) => prev + 1);

    return resolvedBy;
  }, []);

  const resetConflictCount = useCallback(() => {
    setConflictCount(0);
    setLastConflict(null);
  }, []);

  return {
    resolveConflict,
    lastConflict,
    conflictCount,
    resetConflictCount,
    hasConflicts: conflictCount > 0,
  };
}
