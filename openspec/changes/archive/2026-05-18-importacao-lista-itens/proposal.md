## Why

The app needs a fast way to import many shopping list items at once instead of adding them one by one. This is especially useful when users paste a list from notes or another app and want it converted into individual items immediately.

## What Changes

- Add an import screen built with a reusable React textarea component.
- Allow users to paste a multiline list where each line represents one item.
- Parse the pasted content with a regex-based separator to split items.
- Require the input format to be one item per line, with a newline between entries.

## Capabilities

### New Capabilities
- `importacao-lista-itens`: Import shopping list items from multiline pasted text.

### Modified Capabilities
- 

## Impact

- Frontend UI for the shopping list flow.
- Item creation/import logic.
- Validation and parsing of pasted text input.
