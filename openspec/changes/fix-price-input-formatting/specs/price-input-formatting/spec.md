## ADDED Requirements

### Requirement: Deferred price input formatting
The price input SHALL NOT format the display value on every keystroke. Formatting SHALL only apply after 3 seconds of user inactivity (debounce) or when the input loses focus (blur event).

#### Scenario: User types without interruption
- **WHEN** user types "2" into the price input
- **THEN** the input displays "2" (raw value) without automatic formatting to "2,00"

#### Scenario: User continues typing after pause
- **WHEN** user types "2", waits 3 seconds, then types ",50"
- **THEN** after the 3-second pause the input formats to "2,00", and subsequent typing shows raw input again

#### Scenario: Formatting applies on blur
- **WHEN** user types "2,50" and then taps outside the input (blur)
- **THEN** the input immediately formats to "2,50" (already correct) or "2,50" → "2,50"

#### Scenario: Formatting applies after debounce timeout
- **WHEN** user types "2,50" and does not interact for 3 seconds
- **THEN** the input automatically formats to "2,50"

#### Scenario: Debounce timer resets on each keystroke
- **WHEN** user types "2", then within 3 seconds types "5"
- **THEN** the debounce timer resets and no formatting occurs until 3 seconds after the last keystroke

### Requirement: Raw value on focus
When the price input receives focus, it SHALL display the raw numeric value without formatting, allowing the user to edit freely.

#### Scenario: Focus resets to raw value
- **WHEN** user taps on a price input that displays "2,00" (formatted)
- **THEN** the input shows "2" (raw numeric value) ready for editing

#### Scenario: Cursor position preserved on focus
- **WHEN** user focuses on a price input
- **THEN** the cursor is positioned at the end of the value

### Requirement: State consistency during editing
The numeric price state SHALL update on every keystroke for accurate total calculations, regardless of display formatting state.

#### Scenario: Total updates immediately
- **WHEN** user types "5" into a price input (item price was 0)
- **THEN** the shopping list total reflects the new price (5 × quantity) immediately

#### Scenario: Parsing handles comma and dot
- **WHEN** user types "2,50" or "2.50"
- **THEN** both are parsed to the numeric value 2.50 for state updates

### Requirement: Cleanup on unmount
The debounce timer SHALL be cleared when the component unmounts to prevent memory leaks and stale state updates.

#### Scenario: Timer cleared on unmount
- **WHEN** the ItemCard component is removed from the DOM while a debounce timer is active
- **THEN** the timer is cleared and no formatting callback executes
