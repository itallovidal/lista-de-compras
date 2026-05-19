## ADDED Requirements

### Requirement: Item cards animate on entry
The system SHALL animate a shopping item card when it enters the list so the new item appears from bottom to top with a short fade-in.

#### Scenario: Newly added item appears with entry animation
- **WHEN** a user adds a new item to the shopping list
- **THEN** the item card SHALL appear with an entry animation that starts slightly below its final position and reaches full opacity in about 200 ms

### Requirement: Item cards animate on exit
The system SHALL reduce a shopping item card's opacity as the user swipes it toward deletion so the card becomes nearly transparent before removal.

#### Scenario: Removed item exits with animation
- **WHEN** a user swipes an item toward deletion
- **THEN** the item card SHALL decrease in opacity along with the swipe and reach a value close to zero before it is removed

### Requirement: Remaining items reflow smoothly after deletion
The system SHALL animate the layout change of remaining item cards when one item is deleted so the item below moves smoothly into the removed card's position.

#### Scenario: List updates after item deletion
- **WHEN** an item is deleted from the list
- **THEN** the remaining cards SHALL adjust their positions with a smooth layout animation that preserves the visual flow of the list
