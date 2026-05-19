## Why

The app already has a small custom UI layer, but it lacks a consistent set of reusable primitives for common interactions. Adding React Native Reusables-style components will speed up feature work and keep dialogs, inputs, text areas, and tooltips visually and behaviorally consistent.

## What Changes

- Add reusable `Dialog` components for modal confirmation and interruptive flows.
- Add a reusable `Input` component for single-line text entry.
- Add a reusable `TextArea` component for multi-line text entry, aligned with the current UI style.
- Add a reusable `Tooltip` component for contextual hints and inline guidance.
- Standardize the shared styling and public API for these UI primitives.

## Capabilities

### New Capabilities
- `react-native-reusables-components`: reusable dialog, input, textarea, and tooltip UI primitives for the app.

### Modified Capabilities
- 

## Impact

Affected areas include `app/components/ui`, screens that adopt the new primitives, and any future forms or confirmation flows. This may also introduce new UI dependencies or shared helper patterns if needed by the component implementations.
