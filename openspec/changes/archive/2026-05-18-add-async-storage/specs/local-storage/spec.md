## ADDED Requirements

### Requirement: Shopping list persists across app restarts
The system SHALL store the shopping list to device storage using AsyncStorage so that data is available after the app is closed and reopened.

#### Scenario: App loads saved list on startup
- **WHEN** the user opens the app after previously adding items
- **THEN** the saved shopping list is loaded and displayed

#### Scenario: Empty list on first app launch
- **WHEN** the user opens the app for the first time
- **THEN** an empty shopping list is displayed

### Requirement: List saves automatically on item add
The system SHALL save the shopping list to storage whenever a new item is added.

#### Scenario: Item added and persisted
- **WHEN** user adds a new item to the shopping list
- **THEN** the item is saved to AsyncStorage immediately

### Requirement: List saves automatically on item removal
The system SHALL save the shopping list to storage whenever an item is removed.

#### Scenario: Item removed and persisted
- **WHEN** user removes an item from the shopping list
- **THEN** the updated list is saved to AsyncStorage immediately

### Requirement: Storage key uses app-specific namespace
The system SHALL use the key `@minhalistadecompras:shopping-list` for all storage operations.

#### Scenario: Storage key format
- **WHEN** any storage read/write operation occurs
- **THEN** the key `@minhalistadecompras:shopping-list` is used

### Requirement: Handle corrupted storage gracefully
The system SHALL handle corrupted storage data by resetting to an empty list.

#### Scenario: Corrupted JSON in storage
- **WHEN** AsyncStorage returns invalid JSON
- **THEN** the system logs the error and initializes with an empty list