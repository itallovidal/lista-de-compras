## Context

The app currently has a minimal custom UI layer under `app/components/ui`, including at least a `TextArea` implementation. The change goal is to make these primitives consistent and extend the set with dialog, input, and tooltip components so future screens can reuse them instead of duplicating local styling and behavior.

## Goals / Non-Goals

**Goals:**
- Provide reusable `Dialog`, `Input`, `TextArea`, and `Tooltip` primitives.
- Keep the implementation aligned with the existing Expo/React Native stack.
- Make the primitives easy to compose in screens and forms.
- Preserve the app's current visual language where possible.

**Non-Goals:**
- Building every possible React Native Reusables component.
- Redesigning the entire app UI.
- Reworking business logic or screen flows beyond adopting the new primitives.

## Decisions

- Use local app-owned components under `app/components/ui` instead of introducing a full external component wrapper layer. This keeps the API stable for this codebase and avoids unnecessary abstraction.
- Keep `TextArea` as a thin reusable primitive and normalize `Input` alongside it so forms share the same style system. This is simpler than splitting styles across multiple utility modules.
- Implement `Dialog` and `Tooltip` as reusable UI building blocks that can be composed in screens rather than coupling them to specific features. This reduces future duplication.
- Prefer the smallest viable public API for each component. Simpler props reduce maintenance cost and keep adoption easy.

## Risks / Trade-offs

- [Risk] `Dialog` and `Tooltip` behavior can vary across mobile and web platforms. → Mitigation: keep the first version small and validate interactions on the target Expo platforms.
- [Risk] Shared styling may not match every existing screen perfectly. → Mitigation: use the current form and surface styles as the baseline and adjust only where adoption requires it.
- [Risk] New components may expose API gaps later if too minimal. → Mitigation: start with composition-friendly primitives and expand only when real usage needs it.

## Migration Plan

1. Add the new component files under `app/components/ui`.
2. Update any existing `TextArea` usage to the shared primitive if needed.
3. Adopt the new components in one or two representative screens to validate the API.
4. If a rollback is needed, revert the new imports and component files without affecting app state.

## Open Questions

- Should `Dialog` and `Tooltip` match a specific React Native Reusables API exactly, or just the behavior and style goals?
- Should the first implementation include story/demo screens for manual verification?
