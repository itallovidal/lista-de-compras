## ADDED Requirements

### Requirement: Dialog component
The system MUST provide a reusable `Dialog` component set for presenting modal content, including trigger, content, title, description, and action controls.

#### Scenario: Open and close dialog
- **WHEN** a user activates the dialog trigger
- **THEN** the dialog content MUST be presented as a modal overlay
- **AND WHEN** the user dismisses the dialog
- **THEN** the dialog MUST close

#### Scenario: Confirm action
- **WHEN** the user selects the primary action inside the dialog
- **THEN** the associated action handler MUST run

### Requirement: Input component
The system MUST provide a reusable `Input` component for single-line text entry with a consistent visual style.

#### Scenario: Render input field
- **WHEN** a screen renders the `Input` component
- **THEN** it MUST accept standard text input props
- **AND** it MUST display with the app's shared form styling

### Requirement: TextArea component
The system MUST provide a reusable `TextArea` component for multi-line text entry with a consistent visual style.

#### Scenario: Render multiline input
- **WHEN** a screen renders the `TextArea` component
- **THEN** it MUST allow multiline text entry
- **AND** it MUST keep the cursor aligned to the top of the field

### Requirement: Tooltip component
The system MUST provide a reusable `Tooltip` component for contextual help and short explanatory text.

#### Scenario: Show tooltip on interaction
- **WHEN** the user interacts with the tooltip trigger
- **THEN** the tooltip content MUST become visible

#### Scenario: Hide tooltip
- **WHEN** the user dismisses the tooltip or moves away from the trigger
- **THEN** the tooltip content MUST no longer be visible
