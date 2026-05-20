## ADDED Requirements

### Requirement: System shall display connection status in a top status bar
The system SHALL show the current state of the proximity connection in a dedicated status bar positioned at the top of the shopping list screen, above the header. This bar SHALL only be visible when proximity mode is active (mode !== 'off').

#### Scenario: No active connection (discovering)
- **WHEN** the user activates proximity mode and the system is scanning for nearby devices
- **THEN** the top status bar displays "Modo Compra Conjunta" as title and "Procurando dispositivos..." as subtitle with a loading indicator

#### Scenario: Connected to peer
- **WHEN** a peer-to-peer connection is established
- **THEN** the top status bar displays "Modo Compra Conjunta" with a green indicator, the peer device name (e.g., "Galaxy S21"), and the current sync status (e.g., "Sincronizando...")

#### Scenario: Reconnecting after disconnection
- **WHEN** the connection was lost and the system is attempting to reconnect
- **THEN** the top status bar displays "Modo Compra Conjunta" with a yellow indicator, the peer device name, and "Reconectando..."

#### Scenario: Synchronizing pending changes
- **WHEN** the system is exchanging pending events with a peer
- **THEN** the top status bar displays "Sincronizando..." as the subtitle

#### Scenario: Proximity mode is off
- **WHEN** the user has not activated proximity mode
- **THEN** the top status bar is not rendered and takes no space in the layout

### Requirement: Connection status bar shall be centered and prominent
The top status bar SHALL be centered horizontally, positioned above the header gradient, with dark background and light text for clear visibility without obstructing list interaction.

#### Scenario: Status bar layout
- **WHEN** the top status bar is visible
- **THEN** it displays the title on the first line and the subtitle (device name + status) on the second line, both centered

#### Scenario: Status updates in real time
- **WHEN** the connection state changes
- **THEN** the status bar updates its content immediately without requiring user action

### Requirement: System shall notify user of sync conflicts
The system SHALL inform the user when a conflict was resolved during synchronization.

#### Scenario: Conflict resolved automatically
- **WHEN** a conflict is resolved using last-write-wins during sync
- **THEN** the UI shows a brief notification that changes were merged

#### Scenario: Multiple conflicts resolved
- **WHEN** multiple items had conflicts during sync
- **THEN** the UI shows a summary notification with the count of resolved conflicts

### Requirement: System shall provide proximity mode toggle via discreet icon in header
The system SHALL provide a discreet icon button (signal/wifi icon) in the header, positioned to the left of the "Finalizar" button. The icon SHALL indicate the current proximity mode state through color or subtle visual change.

#### Scenario: User activates proximity mode
- **WHEN** the user taps the proximity icon while mode is off
- **THEN** the system activates proximity mode, begins device discovery, and the top status bar appears showing "Procurando dispositivos..."

#### Scenario: User deactivates proximity mode
- **WHEN** the user taps the proximity icon while mode is active
- **THEN** the system stops discovery, closes any active connection, removes the top status bar, and the icon returns to its default state

#### Scenario: Icon reflects active state
- **WHEN** proximity mode is active
- **THEN** the icon displays a visually distinct state (e.g., colored highlight or pulsing animation) to indicate the mode is on
