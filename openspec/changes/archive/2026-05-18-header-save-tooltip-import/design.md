## Context

The app already has a reusable header component and a separate import screen with a tooltip. The new request adds a save affordance to the header and a clearer tooltip message about deletion by drag and full-list import.

## Goals / Non-Goals

**Goals:**
- Add a visible save action in the header.
- Surface a tooltip with the required guidance text.
- Keep the change localized to the header and existing shared UI primitives.

**Non-Goals:**
- Redesigning the overall navigation or shopping flow.
- Changing list import parsing or drag-to-delete behavior itself.
- Adding new dependencies.

## Decisions

- Use the existing header component as the integration point because it already owns top-of-screen actions and the add-item input.
- Represent save as an icon button rather than text to preserve density in the header.
- Reuse the existing tooltip pattern instead of introducing a new help surface.
- Keep the tooltip copy explicit and user-facing so it teaches both delete-by-drag and import behavior without extra interaction.

## Risks / Trade-offs

- [Header clutter] Adding another action may tighten the layout → Keep the button compact and align it with the existing control row.
- [Copy visibility] The tooltip may be missed by some users → Place it near the header action and keep the wording concise.
- [Behavior coupling] The save action depends on how the screen wires saving today → Expose a prop callback so the header stays reusable.
