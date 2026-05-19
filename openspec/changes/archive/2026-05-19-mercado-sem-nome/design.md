## Context

The current finalization flow already collects an optional market name, but the persistence layer rejects empty values. This makes it impossible to save a list without typing a market name, even though the UI presents it as optional.

## Goals / Non-Goals

**Goals:**
- Allow saving a completed list without a market name.
- Persist a stable fallback label when the field is empty.
- Keep the current behavior for explicit market names.

**Non-Goals:**
- Changing the history UI layout.
- Adding extra validation or formatting rules for market names.
- Altering how items, totals, or timestamps are stored.

## Decisions

- Normalize the market name inside the save path in `ShoppingContext`.
  - This keeps the UI flow unchanged and ensures every saved history entry has a displayable label.
  - Alternative considered: move the fallback into the header dialog. Rejected because persistence should own the final stored value.
- Use `Mercado não registrado.` as the fallback label.
  - This satisfies the product expectation and keeps history entries readable.
  - Alternative considered: reuse the current empty-string behavior. Rejected because it leaves ambiguous history entries.
- Preserve trimming for user-provided names.
  - This avoids storing accidental whitespace while still allowing the fallback when the trimmed value is empty.

## Risks / Trade-offs

- [Risk] Multiple places may render or rely on the market name → Mitigation: store the fallback label once at save time so all readers receive a consistent value.
- [Risk] Existing empty entries in storage may still display blank names → Mitigation: no migration is required for the current change, but history rendering can be revisited if legacy data becomes a problem.
