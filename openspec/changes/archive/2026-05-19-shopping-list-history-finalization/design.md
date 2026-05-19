## Context

The app currently persists only the active shopping list through AsyncStorage and the History tab is a placeholder. The header action is also ambiguous because it behaves like save without a clear end-of-shopping flow.

## Goals / Non-Goals

**Goals:**
- Persist finalized shopping lists locally as purchase history.
- Add a finalization dialog with market name input, summary, save, and discard actions.
- Replace the header save icon with a completion-oriented icon.
- Show a history list with compact previews and a detailed view for each saved purchase.
- Enforce a maximum of 4 stored purchases.

**Non-Goals:**
- Sync history to a backend.
- Add editing of saved purchases.
- Add search, filtering, or pagination in history.

## Decisions

- Use a separate AsyncStorage key for finalized purchases instead of mutating the active-list key.
  - Rationale: keeps current list persistence isolated and avoids migration risk.
  - Alternative considered: merge active list and history into one structure. Rejected because the active shopping flow is already stable and should stay simple.
- Store each history entry with market name, items, total, item count, and timestamp.
  - Rationale: the preview card and detail screen can be built from one record without recalculating derived data on every render.
  - Alternative considered: store only items and recompute totals later. Rejected because previews need stable summary fields and the list should remain immutable after finalization.
- Keep the History screen as the primary browsing surface and use an in-screen detail state or modal for item inspection.
  - Rationale: avoids introducing a new navigation route for a small feature and fits the current tab-based structure.
  - Alternative considered: open a dedicated detail screen. Rejected for extra navigation overhead.
- Make the header action open a dialog with two explicit outcomes: save and clear without saving.
  - Rationale: matches the user intent of "finalizar" and removes ambiguity from the current save icon.
  - Alternative considered: keep a single save button and add a secondary clear action elsewhere. Rejected because the workflow is centered on completion.

## Risks / Trade-offs

- [Risk] History entries can grow stale if the shape of shopping items changes later → Mitigation: store a versioned snapshot and keep the data model small.
- [Risk] Showing details inline on the History screen may become crowded on small devices → Mitigation: use a scrollable detail area or modal layout with a clear back action.
- [Risk] Enforcing the 4-item cap may surprise users who expect unlimited history → Mitigation: keep the newest four and make this behavior explicit in UI copy if needed.
