## Context

The app needs a dedicated import screen so users can paste a shopping list and turn it into multiple items at once. The input must behave like a textarea and use a reusable React component, with each item represented by a separate line.

## Goals / Non-Goals

**Goals:**
- Provide a paste-friendly import screen for multiline item lists.
- Parse each line into a distinct item using regex-based splitting.
- Keep the input reusable and aligned with existing React component patterns.

**Non-Goals:**
- Support free-form paragraph parsing or advanced natural-language item extraction.
- Add CSV, JSON, or other file-based import formats.
- Change the shopping list data model.

## Decisions

- Use a textarea-like reusable React component for the input.
  - Rationale: this matches the paste-heavy workflow and keeps the UI consistent with reusable component patterns.
  - Alternative considered: a custom single-purpose input. Rejected because it would be less flexible and harder to reuse.

- Require one item per line as the import contract.
  - Rationale: newline-delimited input is predictable, easy to explain, and simple to validate.
  - Alternative considered: delimiter-based parsing with commas or semicolons. Rejected because it is more error-prone for shopping lists.

- Use regex to split and sanitize lines.
  - Rationale: regex can reliably trim whitespace and ignore empty lines while keeping parsing logic compact.
  - Alternative considered: manual string splitting only. Rejected because regex offers clearer validation and cleanup in a single pass.

## Risks / Trade-offs

- [Users paste text without line breaks] -> Show a clear validation message explaining the required format.
- [Blank lines or extra spaces] -> Trim lines and ignore empty entries during parsing.
- [Regex becomes too permissive] -> Keep the separator simple and test it against valid multiline examples.
