## 1. Data Model and Storage

- [x] 1.1 Add a persisted history entry model for finalized purchases with market, items, totals, count, and timestamp.
- [x] 1.2 Implement storage helpers to save, load, and cap history entries at 4 items.
- [x] 1.3 Keep active shopping-list storage behavior isolated from history storage.

## 2. Finalization Flow

- [x] 2.1 Replace the header save action with a finalization-oriented icon.
- [x] 2.2 Open a dialog from the header action showing market input plus item count and total summary.
- [x] 2.3 Add actions to save the current list to history or clear it without saving.

## 3. History UI

- [x] 3.1 Replace the placeholder History screen with a list of purchase preview cards.
- [x] 3.2 Render each card with market, total, and item count only.
- [x] 3.3 Add a purchase detail view that lists all items from the selected history entry.

## 4. Integration and Verification

- [x] 4.1 Wire the Home screen and shopping context to the new finalization and clear flows.
- [x] 4.2 Verify the history tab loads saved entries and respects the 4-item cap.
- [x] 4.3 Verify the finalization dialog and history detail view work on mobile and desktop-sized layouts.
