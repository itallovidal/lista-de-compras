## Context

The current `Header` component already owns the main top-of-screen interactions: total, item count, finalize action, tooltip, and item input. The requested change is purely structural: it needs a clearer visual hierarchy so the header reads as summary first, actions second, and input last.

## Goals / Non-Goals

**Goals:**
- Reorder the existing header content into clearer visual groups.
- Keep all current behaviors intact.
- Preserve the existing gradient styling and button set.

**Non-Goals:**
- Changing save/finalize semantics.
- Adding new dependencies or global layout primitives.
- Redesigning list items or empty states beyond header spacing alignment.

## Decisions

- Keep the change inside `app/components/ui/Header.tsx` because the component already owns the full header surface.
  - Alternative: split the header into smaller components. Rejected for now because it adds churn without clear reuse.
- Use stacked sections inside the existing gradient container: summary row, count row, spacer, input row.
  - Alternative: keep everything on one row. Rejected because it is dense and harder to scan on small screens.
- Keep the action buttons compact and aligned with the summary line.
  - Alternative: move actions below the input. Rejected because it weakens the immediate access to save/help.
- Preserve the current `onSave`, `onClear`, and tooltip wiring.
  - Alternative: change the header API. Rejected because this is a layout change, not a behavior change.

## Risks / Trade-offs

- [Tighter vertical space] The stacked layout uses more height on small screens → Keep paddings modest and the sections concise.
- [Visual imbalance] The actions may visually compete with the total → Use the total as the primary typographic element and keep buttons compact.
- [Regression in alignment] Reflowing the header can break the input row on narrow devices → Validate the layout on small screen widths after the change.

## Migration Plan

1. Update the header markup and spacing in place.
2. Verify the screen still renders correctly on mobile widths.
3. If the layout overflows, reduce gaps before changing component structure.

## Open Questions

- Should the item count remain directly under the total, or be moved next to the action buttons if the layout feels too tall?
