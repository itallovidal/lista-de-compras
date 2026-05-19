## Context

The app has a shopping list history feature that saves completed lists with items, totals, and market names. Currently, users can only view these saved lists in a dialog. There is no way to restore a previous list into the active shopping list. The ShoppingContext already exposes `addItems` for bulk adding items, and Phosphor icons are already installed and used throughout the app.

## Goals / Non-Goals

**Goals:**
- Allow users to import items from any history entry into the current active list with a single tap
- Navigate to the "Lista" tab after import so users see the restored items immediately
- Preserve existing items in the active list (append, not replace)
- Use Phosphor icons consistent with the existing UI

**Non-Goals:**
- No export functionality (separate feature)
- No merging/deduplication of items (imported items are added as-is)
- No modification of the history entry itself (read-only import)
- No undo mechanism for the import action

## Decisions

1. **Import button placement**: Add the import button alongside the existing "Ver itens" text in the history card footer. This keeps the view-items dialog accessible while making import a first-class action.

2. **Icon selection**: Use `ArrowClockwise` from Phosphor icons (already installed via `phosphor-react-native`). This icon clearly communicates "restore/reuse" and matches the existing icon style in the app.

3. **Import behavior**: Use the existing `addItems` function from ShoppingContext to append imported items. Each imported item retains its original name, price, and quantity but gets a new unique ID to avoid conflicts with existing items.

4. **Navigation**: Use `navigation.navigate("Lista")` after import, consistent with the existing ImportScreen pattern. The TabNavigator setup already supports this.

5. **No confirmation dialog**: Import is a low-risk action (items are appended, not replaced), so no confirmation dialog is needed. Users can simply delete unwanted items if needed.

## Risks / Trade-offs

- [Duplicate items on repeated import] → Users can manually delete duplicates; deduplication is out of scope for this change.
- [History items with stale prices] → Imported items retain their original prices; users can adjust prices manually in the active list.
- [No undo] → Users must manually remove imported items if they change their mind; acceptable for this MVP scope.
