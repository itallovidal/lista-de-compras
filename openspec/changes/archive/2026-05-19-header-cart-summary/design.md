## Context

The current HomeScreen already has access to the shopping list and passes a single `itemCount` value to the `Header`. That count represents distinct items only, which is not enough for users who need to know both how many product lines exist and how many total units are in the cart.

## Goals / Non-Goals

**Goals:**
- Show distinct product count and total unit count in the header.
- Keep the header readable on small screens.
- Preserve existing add, edit, save, and remove flows.

**Non-Goals:**
- Changing the total price calculation.
- Reworking item card interactions.
- Adding new persistence or server synchronization.

## Decisions

- Keep the distinct product count based on `list.items.length`.
  - Alternative: infer product count from rendered cards or a separate counter. Rejected because the list length is already the source of truth.
- Derive total unit count from the shopping list items.
  - Alternative: store a separate `totalQuantity` state. Rejected because it duplicates state and can drift.
- Pass both counts into `Header` instead of making the header inspect context directly.
  - Alternative: let `Header` read the shopping context. Rejected because it would increase coupling and reduce reusability.
- Present the two metrics as a compact summary row above the input area.
  - Alternative: place them under the total price or inside the dialog. Rejected because the user asked for the information in the header.

## Risks / Trade-offs

- [More header density] Two metrics may make the header taller -> Use compact labels and a concise layout.
- [Misinterpretation] Users could confuse distinct products with total units -> Label both values clearly.
- [State drift] If unit totals are computed in more than one place, values could diverge -> Centralize the calculation in the shopping state or a small derived helper.

## Migration Plan

1. Add a derived total-units calculation from the current shopping list.
2. Update `HomeScreen` to pass distinct product count and total unit count to `Header`.
3. Update `Header` to render both metrics clearly.
4. Verify the summary updates when item quantities change.

## Open Questions

- Should the label be “itens” or “unidades” in the UI? The implementation can follow the existing tone once the copy is finalized.
