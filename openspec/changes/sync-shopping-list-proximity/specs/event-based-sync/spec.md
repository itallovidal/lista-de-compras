## ADDED Requirements

### Requirement: System shall synchronize changes via events
The system SHALL replicate list changes between connected devices using discrete events rather than full state transfer.

#### Scenario: Item added on one device
- **WHEN** a user adds an item to the list on one device
- **THEN** an "item-added" event is sent to the connected peer and the item appears on both lists

#### Scenario: Item marked as purchased
- **WHEN** a user marks an item as purchased on one device
- **THEN** an "item-marked" event is sent and the item status updates on both devices

#### Scenario: Item removed on one device
- **WHEN** a user removes an item from the list on one device
- **THEN** an "item-removed" event is sent and the item is removed on both devices

#### Scenario: Item quantity updated
- **WHEN** a user changes the quantity of an item on one device
- **THEN** an "item-updated" event is sent and the quantity updates on both devices

### Requirement: System shall track pending events for offline changes
The system SHALL store sync events locally when the device is disconnected so they can be transmitted upon reconnection.

#### Scenario: Changes made while disconnected
- **WHEN** a user modifies the list while the device is disconnected
- **THEN** the changes are stored as pending events in local storage

#### Scenario: Reconnection triggers pending event sync
- **WHEN** the device reconnects to a peer after being disconnected
- **THEN** all pending events are sent to the peer device

### Requirement: System shall resolve conflicts using last-write-wins
When both devices modify the same item, the system SHALL resolve the conflict by keeping the change with the most recent timestamp.

#### Scenario: Same item edited on both devices
- **WHEN** both devices update the same item's quantity while disconnected
- **THEN** on reconnection, the change with the later timestamp is applied and the other is discarded

#### Scenario: Same item deleted on one device and edited on the other
- **WHEN** one device deletes an item while the other edits it during disconnection
- **THEN** on reconnection, the later operation takes precedence

#### Scenario: Simultaneous changes with identical timestamps
- **WHEN** two changes have the exact same timestamp
- **THEN** the system uses device ID as a tiebreaker (higher ID wins)

### Requirement: System shall track sync state per peer
The system SHALL maintain the last known sync point with each peer to enable efficient delta synchronization.

#### Scenario: First connection with a peer
- **WHEN** a device connects to a peer for the first time
- **THEN** the system performs a full state exchange and records the sync point

#### Scenario: Subsequent connection with known peer
- **WHEN** a device reconnects to a previously connected peer
- **THEN** the system exchanges only events since the last recorded sync point

### Requirement: System shall validate event integrity
The system SHALL validate received events before applying them to the local list state.

#### Scenario: Malformed event received
- **WHEN** a device receives an event that fails validation
- **THEN** the event is discarded and an error is logged without affecting local state

#### Scenario: Event for unknown list received
- **WHEN** a device receives an event for a list that does not exist locally
- **THEN** the event is queued until the list is available or discarded after timeout
