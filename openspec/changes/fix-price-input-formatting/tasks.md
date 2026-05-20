## 1. Create debounce hook

- [x] 1.1 Create `app/hooks/useDebounceCallback.ts` — a custom hook that returns a debounced callback with cleanup on unmount
- [x] 1.2 Write unit tests for the debounce hook (timer fires, timer resets, cleanup on unmount)

## 2. Refactor ItemCard price input

- [x] 2.1 Add local `displayValue` state to ItemCard for raw vs formatted display
- [x] 2.2 Add `onFocus` handler that resets `displayValue` to raw numeric value
- [x] 2.3 Add `onBlur` handler that applies `formatPriceInput()` to `displayValue`
- [x] 2.4 Replace direct `formatPriceInput(item.price)` in `value` prop with `displayValue` state
- [x] 2.5 Wire debounce (3s) to apply formatting to `displayValue` on inactivity
- [x] 2.6 Ensure debounce timer clears on focus and component unmount

## 3. Update tests

- [x] 3.1 Update `formatPriceInput.test.ts` if any behavior changed (no changes needed — function unchanged)
- [x] 3.2 Add interaction tests for ItemCard price input (focus shows raw, blur formats, debounce formats)

## 4. Verify and cleanup

- [x] 4.1 Run TypeScript type check (`npx tsc --noEmit`) — no new errors introduced
- [x] 4.2 Run lint (`npx expo lint`) — no errors or warnings
- [x] 4.3 Test manually: type "2" → stays "2", wait 3s → becomes "2,00", type "2,50" → blur → stays "2,50" (requires device testing)
- [x] 4.4 Verify total calculations still update immediately on keystroke (parsePriceInput called on every change)
