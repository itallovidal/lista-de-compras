## 1. Save flow update

- [x] 1.1 Update the save path to accept an empty market name and replace it with `Mercado não registrado.` before persisting history.
- [x] 1.2 Keep trimming explicit market names so whitespace-only input also falls back to the default label.

## 2. Verification

- [x] 2.1 Verify that saving with a blank market name creates a history entry with the default label.
- [x] 2.2 Verify that saving with a non-empty market name preserves the trimmed user input.
