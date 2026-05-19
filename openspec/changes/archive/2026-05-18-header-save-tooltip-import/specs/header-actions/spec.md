## ADDED Requirements

### Requirement: Header save action
The header SHALL expose a save action using a save icon so the user can trigger saving from the top of the screen.

#### Scenario: Save action is visible in the header
- **WHEN** the header is rendered
- **THEN** a save button with a save icon SHALL be visible

#### Scenario: Save action is available to the user
- **WHEN** the user taps the save button
- **THEN** the app SHALL execute the configured save behavior

### Requirement: Header tooltip guidance
The header SHALL provide a tooltip message that informs the user they can drag items to delete them and import full lists from the import tab.

#### Scenario: Tooltip explains drag-to-delete and import
- **WHEN** the user opens the header tooltip
- **THEN** the tooltip SHALL explain that items can be dragged to delete
- **AND THEN** the tooltip SHALL explain that full lists can be imported from the import tab
