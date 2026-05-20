## Context

The current price input in `ItemCard.tsx` uses `formatPriceInput()` directly in the `value` prop, which formats on every render. Combined with `onChangeText` calling `parsePriceInput()` on every keystroke, this creates a feedback loop where:

1. User types "2" → state updates to `2.00` → `formatPriceInput(2.00)` returns "2,00" → input shows "2,00" with cursor at end
2. User cannot naturally type "2,50" because the formatting hijacks the input mid-typing

The formatting utilities (`formatPriceInput.ts`, `parsePriceInput.ts`) are sound — the problem is *when* formatting is applied to the display value.

## Goals / Non-Goals

**Goals:**
- Eliminate cursor-jumping and input interference during price editing
- Apply formatting only after 3 seconds of inactivity (debounce) or on blur
- Preserve raw user input while editing for natural typing flow
- Maintain numeric state consistency for calculations

**Non-Goals:**
- Changing the parsing logic (`parsePriceInput.ts`) — it works correctly
- Changing the currency display format (`formatCurrency.ts`) — used elsewhere, unaffected
- Adding input masking libraries — keeping it simple with debounce + blur

## Decisions

### 1. Debounce formatting, not parsing
Parsing (`parsePriceInput`) continues on every keystroke to keep state accurate for totals. Only the *display formatting* (`formatPriceInput`) is deferred. This ensures the total updates immediately while the input remains editable.

### 2. Use React `useRef` + `setTimeout` for debounce
A simple `useRef`-based debounce avoids external dependencies. On each `onChangeText`, clear the previous timer and set a new 3-second timer that applies formatting. On unmount, clean up the timer.

### 3. Track raw vs formatted display value
Use a local state `displayValue` separate from the item's `price`. While editing, `displayValue` holds the raw typed text. On blur or debounce timeout, `displayValue` becomes the formatted value. On focus, reset `displayValue` to the raw number (unformatted) so the user can edit freely.

### 4. Blur handler applies formatting immediately
When the input loses focus, apply `formatPriceInput()` immediately regardless of debounce timer. This ensures the field always shows a properly formatted value when not being edited.

### Alternatives considered
- **Input masking library (e.g., react-native-mask-input)**: Adds dependency weight, may have its own cursor bugs. Rejected for simplicity.
- **Format on blur only**: Leaves raw "2" visible while other items show formatted prices. Debounce provides a middle ground.

## Risks / Trade-offs

- **[Risk] User sees raw "2" instead of "2,00" while editing** → Mitigation: This is intentional and desirable — it allows natural input. Formatting appears after 3s or on blur.
- **[Risk] Debounce timer fires while user is still thinking** → Mitigation: 3 seconds is generous. If needed, can be increased later.
- **[Risk] Rapid focus/blur cycles could cause flicker** → Mitigation: Clear debounce timer on focus to prevent stale formatting.
- **[Trade-off] Slightly more complex component state** → Acceptable; the UX improvement justifies the added local state.
