## ADDED Requirements

### Requirement: Bottom tab bar respects device safe areas
The application MUST render the bottom tab bar with spacing that respects the device's bottom safe area inset so the tab bar does not overlap the system navigation area.

#### Scenario: Phone with gesture navigation
- **WHEN** the app is opened on a device with a bottom system navigation area
- **THEN** the bottom tab bar remains fully visible above that area

#### Scenario: Device with no bottom inset
- **WHEN** the app is opened on a device without a noticeable bottom safe area inset
- **THEN** the bottom tab bar still renders with consistent spacing and no overlap

### Requirement: Keyboard-heavy screens avoid keyboard overlap
Screens that accept text input or contain low-positioned interactive content MUST provide keyboard-aware layout behavior so the active input and nearby controls remain accessible when the keyboard is open. Scrollable screens with inputs SHALL automatically scroll to bring the focused element fully into view above the keyboard — this behavior MUST work on Android.

#### Scenario: Editing a shopping list item near the bottom
- **WHEN** the user taps the price input of a list item that is near the bottom of the visible area
- **THEN** the list automatically scrolls so the focused item is fully visible above the keyboard

#### Scenario: Editing a shopping list item hidden behind the keyboard
- **WHEN** the keyboard is open and the user scrolls down to a list item whose input is behind the keyboard
- **THEN** focusing that input causes the list to scroll so the item is visible above the keyboard

#### Scenario: Import text area
- **WHEN** the user opens the import screen and focuses the multiline input
- **THEN** the content remains usable without being covered by the keyboard

### Requirement: Tab navigation remains usable while typing
When the keyboard is open on an input-focused screen, the tab navigation MUST not obstruct the active content area.

#### Scenario: Typing in a text field
- **WHEN** the keyboard is visible
- **THEN** the visible content area is not blocked by the bottom tab bar
