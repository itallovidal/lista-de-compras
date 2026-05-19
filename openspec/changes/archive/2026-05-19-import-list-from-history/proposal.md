## Why

Users can view saved shopping lists in the history screen but cannot reuse them. Adding an import button on each history entry allows users to quickly restore a previous shopping list into the active list, saving time on recurring purchases.

## What Changes

- Add an import button (Phosphor icon) to each history entry card in the HistoryScreen
- Tapping the import button loads the history entry's items into the current active shopping list
- After import, the user is automatically navigated to the "Lista" tab to see the restored items
- The current active list items are preserved (imported items are appended, not replaced)

## Capabilities

### New Capabilities
- `history-list-import`: Import items from a saved history entry into the current active shopping list

### Modified Capabilities
<!-- No existing capabilities are modified -->

## Impact

- `app/pages/HistoryScreen.tsx` — Add import button UI and import handler
- `app/contexts/ShoppingContext.tsx` — May need to expose `addItems` for bulk import (already exists)
- `app/navigation/TabNavigator.tsx` — No changes needed; navigation via `navigation.navigate("Lista")`
