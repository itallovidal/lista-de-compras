## ADDED Requirements

### Requirement: System shall expose useProximity hook for proximity state access
The system SHALL provide a `useProximity` hook that returns the current proximity mode state and control functions. The hook SHALL be backed by a dedicated `ProximityContext` separate from shopping list state.

#### Scenario: Hook returns off state by default
- **WHEN** `useProximity` is called and proximity mode has not been activated
- **THEN** it returns `mode: 'off'`, `peerDeviceName: null`, and `syncStatus: 'idle'`

#### Scenario: Hook returns discovering state after activation
- **WHEN** `enableMode()` is called
- **THEN** the hook returns `mode: 'discovering'` and triggers device discovery

#### Scenario: Hook returns connected state with peer info
- **WHEN** a peer device is connected
- **THEN** the hook returns `mode: 'connected'`, `peerDeviceName` with the device name, and current `syncStatus`

#### Scenario: Hook returns reconnecting state after disconnection
- **WHEN** the connection is lost while a peer was connected
- **THEN** the hook returns `mode: 'reconnecting'` and preserves the last known `peerDeviceName`

### Requirement: Proximity hook shall provide enable and disable functions
The `useProximity` hook SHALL expose `enableMode()` and `disableMode()` functions for toggling proximity mode.

#### Scenario: enableMode activates discovery
- **WHEN** `enableMode()` is called
- **THEN** proximity mode transitions to 'discovering' and the native discovery layer is activated

#### Scenario: disableMode deactivates all proximity features
- **WHEN** `disableMode()` is called
- **THEN** proximity mode transitions to 'off', discovery stops, any active connection is closed, and peer state is cleared

### Requirement: Proximity context shall be independent from shopping context
The `ProximityContext` SHALL be a separate React context from `ShoppingContext`, managing only proximity-related state. The two contexts SHALL communicate only through explicit integration in the HomeScreen component.

#### Scenario: Proximity state changes do not trigger shopping re-renders
- **WHEN** proximity mode state changes
- **THEN** only components subscribed to `ProximityContext` re-render, not components using only `ShoppingContext`

#### Scenario: Shopping list edits do not affect proximity state
- **WHEN** the user adds, removes, or updates shopping items
- **THEN** the proximity mode state remains unchanged

### Requirement: Proximity state shall persist across app backgrounding
The system SHALL preserve the current proximity mode state when the app moves to the background and restore it on return.

#### Scenario: App backgrounded while discovering
- **WHEN** the app is backgrounded while in 'discovering' mode
- **THEN** the mode is preserved and discovery pauses, resuming when the app returns to foreground

#### Scenario: App backgrounded while connected
- **WHEN** the app is backgrounded while in 'connected' mode
- **THEN** the mode is preserved and the connection state is maintained if possible, or marked for reconnection on return
