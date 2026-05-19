## 1. Suggestion Data and Flow

- [ ] 1.1 Define a small static catalog with Limpeza, Higiene, Bebidas and Frios plus a few starter products.
- [ ] 1.2 Add local state in the header to switch between category view, product view and selected-items state.
- [ ] 1.3 Branch the add action so empty input opens the dialog and typed input keeps the current behavior.

## 2. Dialog UI

- [ ] 2.1 Build the dialog content for category selection using wrapped button rows.
- [ ] 2.2 Build the product selection view for the chosen category with multi-select feedback.
- [ ] 2.3 Add a back/reset path so the user can return from products to categories.
- [ ] 2.4 Add a confirmation action that summarizes the selected count before submitting.

## 3. Shopping Integration

- [ ] 3.1 Wire confirmation to add every selected shopping item with quantity 1 and price 0.
- [ ] 3.2 Ensure the dialog closes and the input resets after the batch add is confirmed.
- [ ] 3.3 Keep free-text item creation unchanged when the user types a name.

## 4. Verification

- [ ] 4.1 Verify tapping add on an empty field opens the dialog instead of adding an empty item.
- [ ] 4.2 Verify category-to-product navigation and multi-selection work with a small initial dataset.
- [ ] 4.3 Verify confirming a batch adds all selected items at once.
- [ ] 4.4 Verify manual typing still adds a custom item directly.
