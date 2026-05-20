## ADDED Requirements

### Requirement: Device shall discover nearby compatible devices
The system SHALL scan for other Android devices running the app that are in proximity mode and advertise their availability for list synchronization.

#### Scenario: Successful device discovery
- **WHEN** the user activates proximity mode and another compatible device is within range
- **THEN** the system detects the nearby device and makes it available for connection

#### Scenario: No devices in range
- **WHEN** the user activates proximity mode and no compatible devices are nearby
- **THEN** the system continues scanning and reports "searching" status

#### Scenario: Discovery capability unavailable
- **WHEN** the device does not support Wi-Fi Aware or the feature is disabled
- **THEN** the system reports the limitation and keeps the app in offline mode

### Requirement: Device shall advertise its availability
The system SHALL broadcast its presence when the user enters proximity mode so other devices can discover it.

#### Scenario: User enters proximity mode
- **WHEN** the user activates proximity mode on their device
- **THEN** the device begins advertising its availability to nearby devices

#### Scenario: User exits proximity mode
- **WHEN** the user deactivates proximity mode
- **THEN** the device stops advertising and is no longer discoverable

### Requirement: Discovery shall respect device compatibility
The system SHALL only discover devices running a compatible version of the app with proximity sync enabled.

#### Scenario: Incompatible device detected
- **WHEN** a device is discovered that runs an incompatible app version
- **THEN** the system ignores the device and does not attempt connection
