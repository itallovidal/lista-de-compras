## 1. UI Entry Point

- [x] 1.1 Locate the shopping list screen or flow where the import action should live.
- [x] 1.2 Add the import screen entry UI using the reusable React textarea component.
- [x] 1.3 Ensure the screen explains the required multiline format clearly.

## 2. Parsing and Validation

- [x] 2.1 Implement regex-based splitting for pasted multiline text.
- [x] 2.2 Trim each line and ignore empty entries.
- [x] 2.3 Reject or flag input that does not match the one-item-per-line format.

## 3. Import Behavior

- [x] 3.1 Map parsed lines into item payloads compatible with the existing list flow.
- [x] 3.2 Trigger the import action to create the items in bulk.
- [x] 3.3 Handle success and validation feedback for the user.

## 4. Verification

- [x] 4.1 Add tests for valid multiline import parsing.
- [x] 4.2 Add tests for invalid non-newline-separated input.
- [ ] 4.3 Verify the textarea component and import screen render correctly on mobile and desktop.
