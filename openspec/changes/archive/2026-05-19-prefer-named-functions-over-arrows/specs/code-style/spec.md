## ADDED Requirements

### Requirement: Prefer named functions
The codebase MUST prefer named function declarations or named function expressions for components, helpers, and other reusable logic.

#### Scenario: Defining a reusable component
- **WHEN** a developer creates a component or helper
- **THEN** the implementation uses a named function instead of an arrow function unless an exception applies

### Requirement: Limit arrow functions
The codebase MUST use arrow functions only when they are strictly necessary or when they materially improve local readability.

#### Scenario: Inline event handler
- **WHEN** a button needs a short inline handler
- **THEN** an arrow function may be used for that handler

### Requirement: Document the style rule
The project MUST define the function-style preference in its contributor or linting guidance so the convention is visible to maintainers.

#### Scenario: Reviewing project guidelines
- **WHEN** a contributor reads the project rules
- **THEN** they can find the preference for named functions and the limited exceptions for arrow functions
