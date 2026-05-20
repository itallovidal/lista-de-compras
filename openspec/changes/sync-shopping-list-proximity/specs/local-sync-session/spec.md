## ADDED Requirements

### Requirement: System shall establish peer-to-peer connection
The system SHALL create a symmetric peer-to-peer connection between two discovered devices without requiring complex manual pairing.

#### Scenario: Automatic connection after discovery
- **WHEN** two devices discover each other and both are in proximity mode
- **THEN** the system establishes a local connection between them automatically

#### Scenario: Connection requires user confirmation
- **WHEN** a device is discovered for the first time
- **THEN** the system prompts the user to confirm the connection before proceeding

#### Scenario: Connection fails gracefully
- **WHEN** the connection cannot be established due to interference or incompatibility
- **THEN** the system reports the failure and returns to discovery mode

### Requirement: System shall maintain connection state
The system SHALL track the current state of the local sync session including connected, disconnected, and reconnecting states.

#### Scenario: Connection established
- **WHEN** a peer-to-peer connection is successfully created
- **THEN** the system transitions to "connected" state and begins syncing

#### Scenario: Connection lost
- **WHEN** the local connection is interrupted (devices move apart, interference)
- **THEN** the system transitions to "disconnected" state and preserves local data

#### Scenario: Reconnection attempt
- **WHEN** devices come back into proximity after disconnection
- **THEN** the system automatically attempts to reconnect and transitions to "reconnecting" state

### Requirement: System shall handle session lifecycle
The system SHALL manage the full lifecycle of a sync session from initiation through termination.

#### Scenario: User ends session manually
- **WHEN** the user exits proximity mode while connected
- **THEN** the system gracefully closes the connection and saves all pending changes

#### Scenario: App is backgrounded
- **WHEN** the app moves to the background while connected
- **THEN** the system pauses discovery and maintains connection if possible, or saves state for recovery

#### Scenario: App crashes during session
- **WHEN** the app crashes while a sync session is active
- **THEN** the system recovers session state on restart and attempts reconnection

### Requirement: System shall operate in symmetric peer mode
Both devices SHALL operate as equal peers with no designated host, each capable of sending and receiving sync events.

#### Scenario: Either device initiates sync
- **WHEN** either device has pending changes
- **THEN** that device sends events to the other without requiring host coordination

#### Scenario: Both devices send simultaneously
- **WHEN** both devices send events at the same time
- **THEN** the system processes both streams and resolves conflicts using timestamp ordering
