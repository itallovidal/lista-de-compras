## Why

The price input currently formats on every keystroke, causing two critical UX bugs: (1) typing "2" immediately becomes "2,00" with the cursor trapped at the end, making it impossible to type "2,50" naturally; (2) the aggressive reformatting interferes with user input flow, making the price field frustrating to use.

## What Changes

- Price formatting will no longer apply on every keystroke (`onChangeText`)
- Formatting will apply only after 3 seconds of inactivity (debounce) OR when the input loses focus (`blur` event)
- The raw user-typed value remains visible while editing, preserving cursor position
- Parsing to numeric value still happens on every change for state consistency, but display formatting is deferred

## Capabilities

### New Capabilities
- `price-input-formatting`: Deferred formatting behavior for price inputs with debounce and blur triggers

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- `app/components/ShoppingItem/ItemCard.tsx` — price input component, needs debounce logic and blur handler
- `app/lib/formatPriceInput.ts` — may need adjustment for raw vs formatted value handling
- `app/lib/parsePriceInput.ts` — remains unchanged (still parses raw input)
- Tests for price input behavior will need updates
