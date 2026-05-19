## Context

The HomeScreen already exposes a single add-item input in the header and a shopping context that creates items with `price: 0` and `quantity: 1`. The new behavior should make adding common items faster without replacing the existing free-text flow.

## Goals / Non-Goals

**Goals:**
- Open a suggestion dialog when add is triggered with an empty input.
- Let the user choose a category first, then a product.
- Allow selecting multiple products before confirming.
- Add selected products with default quantity 1 and price 0.
- Keep the manual typed-name flow working.

**Non-Goals:**
- Building a searchable or remote product catalog.
- Persisting categories or products separately.
- Changing shopping item storage or history behavior.

## Decisions

- Keep the suggestion catalog local to the header component for the first iteration.
  - Alternative: move catalog data into context or storage. Rejected because the initial scope is validation, not catalog management.
- Use a two-step dialog state: category selection first, then product selection.
  - Alternative: show all products at once. Rejected because the requested UX emphasizes categories first.
- Reuse the existing `addItem` path for typed input and add a new explicit handler for product suggestions.
  - Alternative: create a separate context method for suggested items. Rejected because the same underlying item shape already fits both flows.
- Add an explicit confirm step for batch selection.
  - Alternative: add each product immediately on tap. Rejected because the requested flow should let the user choose multiple products and add them once.
- Keep the catalog small and static.
  - Alternative: seed many options up front. Rejected because the goal is to validate usability before scaling the list.

- Use a small fixed starting catalog with categories such as Limpeza, Higiene, Bebidas and Frios.
  - Alternative: leave categories undefined until implementation. Rejected because the user already provided the initial set for validation.

## Risks / Trade-offs

- [Header complexity] Adding dialog state to the header increases component complexity -> Keep the state machine small and local.
- [Catalog maintenance] Hard-coded suggestions can drift from real inventory needs -> Limit the first version to a small validation set and revisit after feedback.
- [Batch selection complexity] Users may not understand the confirm step -> Make selected items visibly counted and keep the confirm action prominent.
- [Ambiguous empty-input behavior] Users may not notice the dialog trigger if the input is blank -> Use clear button copy and visible dialog title.

## Migration Plan

1. Update the header add action to branch on empty vs non-empty input.
2. Add the suggestion dialog UI and local category/product state.
3. Wire product selection to the existing shopping add flow through a batch confirm action.
4. Verify manual text entry still works and the dialog only appears for empty input.

## Open Questions

- No open questions remain for the initial validation scope.
