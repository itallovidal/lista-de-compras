## Context

The HomeScreen already receives `total` from `useShopping()` and passes it to the `Header`. Item quantity changes flow through `ItemCard` into `ShoppingContext.updateItem()`, which recalculates the list total from the current items array. The change request is to make that relationship explicit in the change contract so the header value always tracks quantity edits.

## Goals / Non-Goals

**Goals:**
- Ensure the header total updates whenever an item quantity changes.
- Keep the current data flow and derived total model.
- Avoid introducing extra local state or duplicate total calculations.

**Non-Goals:**
- Changing how totals are calculated.
- Adding new persistence or synchronization layers.
- Altering item card layout or header visual styling.

## Decisions

- Keep `total` derived from the shopping list state in `ShoppingContext`.
  - Alternative: store a separate header total state. Rejected because it duplicates source of truth and risks drift.
- Continue updating quantity through `updateItem(id, { quantity })` from the item card.
  - Alternative: let the card update the header directly. Rejected because the header should remain a pure consumer of list state.
- Make the requirement explicit in `home-ui` instead of introducing a separate UI capability.
  - Alternative: add a new `header-total-sync` spec. Rejected because the behavior is part of the existing home screen contract.

## Risks / Trade-offs

- [Regression in derived state] Any future change to `ShoppingContext.calculateTotal` affects header accuracy -> Keep tests and manual verification centered on quantity edits.
- [Spec ambiguity] The change could be mistaken for a visual-only header update -> The spec now states the total must refresh immediately on quantity or price changes.
- [Coupling to shared state] The header depends on list state changes across item cards -> This is already the current architecture, so the change preserves the existing flow rather than expanding it.

## Migration Plan

1. Update the `home-ui` spec to include immediate header refresh on item quantity changes.
2. Verify quantity updates in `ItemCard` still reach `ShoppingContext.updateItem()`.
3. Confirm the header total changes as soon as the list state updates.

## Open Questions

- None. The existing total derivation model already supports this behavior; the remaining work is implementation and validation.
