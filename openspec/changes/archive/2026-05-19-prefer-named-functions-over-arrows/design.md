## Context

The application currently allows arrow functions to appear throughout components, helpers, and local callbacks. The requested change is primarily a code-style and maintainability improvement, not a runtime behavior change.

## Goals / Non-Goals

**Goals:**
- Prefer named functions for components and reusable logic.
- Keep arrow functions only for narrow cases where they are necessary or clearly more readable.
- Make the rule visible to contributors.

**Non-Goals:**
- Rewrite every inline callback in the app.
- Change runtime behavior or public APIs.
- Introduce a new dependency unless the existing project setup already supports the chosen enforcement mechanism.

## Decisions

- Use a naming-first style for functions because it improves stack traces, grepability, and scanability.
  - Alternative considered: keep arrows as the default and only rename components. Rejected because it does not make the style consistent.
- Treat inline button handlers as a narrow exception.
  - Alternative considered: ban all arrows. Rejected because some inline handlers are concise and local.
- Encode the rule in project guidance and, if feasible, linting.
  - Alternative considered: rely only on code review. Rejected because the rule would be easy to drift from.

## Risks / Trade-offs

- [Risk] Broad refactors may touch many files. → [Mitigation] Apply the rule incrementally and keep changes mechanical.
- [Risk] Some React patterns or callbacks may be more verbose as named functions. → [Mitigation] Allow explicit exceptions where the arrow form is materially clearer.
- [Risk] Lint enforcement may require extra setup. → [Mitigation] Prefer updating existing project rules before adding new tooling.

## Migration Plan

1. Add the project rule describing the preferred function style.
2. Update high-visibility components and shared helpers first.
3. Continue converting remaining application code in small batches.
4. If linting is introduced, run it in warning mode first if needed, then tighten to enforcement.

## Open Questions

- Which files or directories should be considered in scope for the initial refactor?
- Should the exception for arrow functions be limited to event handlers, or also allow small local callbacks in array methods?
