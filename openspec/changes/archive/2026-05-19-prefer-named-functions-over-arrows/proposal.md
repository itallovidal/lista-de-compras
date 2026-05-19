## Why

The codebase uses arrow functions broadly, which makes many components and helpers less explicit to read and trace. This change introduces a stronger project-level style to prefer named functions for clarity and consistency.

## What Changes

- Prefer named function declarations or named function expressions across the application code.
- Restrict arrow functions to cases where they are strictly necessary or clearly beneficial, such as concise inline button handlers.
- Add a project rule to document and enforce the preferred function style.
- Update existing code gradually toward the new convention.

## Capabilities

### New Capabilities
- `code-style`: Establishes and enforces a project convention that prefers named functions over arrow functions.

### Modified Capabilities
- 

## Impact

This affects application source code, shared component patterns, linting or review guidance, and any contributor-facing documentation that describes code style.
