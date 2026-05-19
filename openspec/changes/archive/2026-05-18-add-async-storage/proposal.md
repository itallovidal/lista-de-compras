## Why

Currently, the shopping list data is stored only in memory via React state. When the app is closed or refreshed, all items are lost. Users need persistent storage to maintain their shopping list across app restarts.

## What Changes

- Add `@react-native-async-storage/async-storage` as a new dependency
- Create a storage utility module for reading/writing the shopping list
- Integrate storage loading on app startup
- Save list automatically only when items are added or removed (not on every update)
- Use key format `@minhalistadecompras:shopping-list` for storage

## Capabilities

### New Capabilities
- `local-storage`: Persistent storage for shopping list using AsyncStorage

### Modified Capabilities
- None

## Impact

- New dependency: `@react-native-async-storage/async-storage`
- Modified: `app/contexts/ShoppingContext.tsx` - integrate storage load/save
- New file: `app/lib/storage.ts` - storage utility functions