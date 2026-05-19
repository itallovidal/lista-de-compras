## 1. Project rule

- [x] 1.1 Add a project guideline that prefers named functions for components and reusable logic.
- [x] 1.2 Document the narrow exceptions for arrow functions, including short inline button handlers.

## 2. Codebase refactor

- [x] 2.1 Convert top-level components from arrow functions to named function declarations where practical.
- [x] 2.2 Convert shared helpers and reusable callbacks to named functions.
- [x] 2.3 Keep arrow functions only for cases that are explicitly necessary or clearly simpler.

## 3. Enforcement and validation

- [x] 3.1 Add or update linting or review guidance to flag unnecessary arrow functions.
- [x] 3.2 Verify the updated code style in representative app screens and shared modules.
- [x] 3.3 Run project checks to confirm the refactor does not change behavior.
