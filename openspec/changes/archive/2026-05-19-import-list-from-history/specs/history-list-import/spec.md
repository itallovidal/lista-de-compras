## ADDED Requirements

### Requirement: History entry import button
Each history entry card in the HistoryScreen SHALL display an import button with a Phosphor icon that allows users to import that entry's items into the current active shopping list.

#### Scenario: Import button is visible on history cards
- **WHEN** a user views the HistoryScreen with saved entries
- **THEN** each history card displays an import button with a Phosphor icon

#### Scenario: Import button triggers item import
- **WHEN** a user taps the import button on a history entry
- **THEN** all items from that history entry are added to the current active shopping list

#### Scenario: Navigation to Lista tab after import
- **WHEN** items are successfully imported from a history entry
- **THEN** the app navigates to the "Lista" tab to display the updated shopping list

### Requirement: Imported items are appended to current list
The import operation SHALL append imported items to the existing items in the active shopping list, not replace them.

#### Scenario: Existing items are preserved
- **WHEN** the active list already contains items and a user imports a history entry
- **THEN** the original items remain in the list alongside the newly imported items

#### Scenario: Imported items retain original data
- **WHEN** items are imported from a history entry
- **THEN** each imported item retains its original name, price, and quantity from the history entry

#### Scenario: Imported items receive new unique IDs
- **WHEN** items are imported from a history entry
- **THEN** each imported item is assigned a new unique ID to prevent conflicts with existing items
