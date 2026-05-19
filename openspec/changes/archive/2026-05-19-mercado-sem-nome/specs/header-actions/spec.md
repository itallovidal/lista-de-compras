## MODIFIED Requirements

### Requirement: Header save action
The header SHALL expose a save action using a save icon so the user can trigger saving from the top of the screen.

#### Scenario: Save action is visible in the header
- **WHEN** the header is rendered
- **THEN** a save button with a save icon SHALL be visible

#### Scenario: Save action is available to the user
- **WHEN** the user taps the save button
- **THEN** the app SHALL execute the configured save behavior

### Requirement: Market name is optional when saving
The save flow SHALL allow the user to finalize a shopping list without entering a market name.

#### Scenario: Save with empty market name
- **WHEN** the user confirms saving with the market name field empty
- **THEN** the list SHALL still be saved to history
- **AND THEN** the stored market name SHALL be `Mercado não registrado.`

#### Scenario: Save with provided market name
- **WHEN** the user confirms saving with a non-empty market name
- **THEN** the stored market name SHALL match the trimmed user input

### Requirement: Header tooltip guidance
The header SHALL provide a tooltip message that informs the user they can drag items to delete them and import full lists from the import tab.

#### Scenario: Tooltip explains drag-to-delete and import
- **WHEN** the user opens the header tooltip
- **THEN** the tooltip SHALL explain that items can be dragged to delete
- **AND THEN** the tooltip SHALL explain that full lists can be imported from the import tab
