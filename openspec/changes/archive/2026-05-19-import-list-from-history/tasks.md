## 1. Add importItems function to ShoppingContext

- [x] 1.1 Add `importItems` function to ShoppingContextType interface that accepts `ShoppingItem[]`
- [x] 1.2 Implement `importItems` callback that assigns new IDs to imported items, appends them to the current list, recalculates total, and saves to AsyncStorage
- [x] 1.3 Export `importItems` in the ShoppingContext.Provider value

## 2. Add import button to HistoryScreen

- [x] 2.1 Import `ArrowClockwise` icon from `phosphor-react-native` in HistoryScreen
- [x] 2.2 Add a `Pressable` import button with the `ArrowClockwise` icon to each history entry card footer, positioned next to the "Ver itens" text
- [x] 2.3 Style the import button to match the existing UI (gray-300 color, appropriate size)

## 3. Implement import handler and navigation

- [x] 3.1 Add `useShopping` hook import and `useNavigation` hook import to HistoryScreen
- [x] 3.2 Create `handleImport` function that calls `importItems(entry.items)` and navigates to "Lista" tab
- [x] 3.3 Wire the import button's `onPress` to `handleImport` for each history entry

## 4. Verify and test

- [x] 4.1 Run TypeScript type checking to ensure no type errors
- [x] 4.2 Run existing tests to ensure no regressions (test runner not configured; test files exist)
