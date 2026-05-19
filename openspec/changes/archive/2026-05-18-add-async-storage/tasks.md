## 1. Setup

- [x] 1.1 Install `@react-native-async-storage/async-storage` dependency
- [x] 1.2 Create `app/lib/storage.ts` with storage utility functions

## 2. Modify ShoppingContext

- [x] 2.1 Import AsyncStorage and storage utilities in ShoppingContext
- [x] 2.2 Add useEffect to load shopping list from storage on mount
- [x] 2.3 Update addItem to save list after adding new item
- [x] 2.4 Update removeItem to save list after removing item
- [x] 2.5 Handle storage errors gracefully (corrupted data, etc.)

## 3. Verify

- [x] 3.1 Test adding items persists after app restart
- [x] 3.2 Test removing items persists after app restart
- [x] 3.3 Test empty list on first launch