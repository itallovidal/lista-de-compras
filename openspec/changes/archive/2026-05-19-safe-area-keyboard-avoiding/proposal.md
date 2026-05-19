## Why

On mobile devices, the bottom tab navigator is being rendered too close to the system navigation bar, which makes part of the UI feel cut off or unsafe. The app also needs keyboard-aware behavior so elements near the bottom of long lists remain reachable when the keyboard is open.

## What Changes

- Adjust the app's bottom navigation layout to respect device safe areas, especially on phones with gesture/navigation bars.
- Add keyboard avoiding behavior where needed so inputs and low-positioned list items stay accessible while the keyboard is open.
- Update affected screens and containers to work correctly with the new layout behavior.

## Capabilities

### New Capabilities
- `safe-area-keyboard-avoiding`: App layout behavior that keeps bottom navigation above system bars and avoids keyboard overlap on interactive screens.

### Modified Capabilities
- 

## Impact

- App navigation layout and screen containers.
- Mobile dependencies already used for safe area and keyboard handling, if additional wrapping or configuration is needed.
- Screens with long scrollable lists and interactive elements near the bottom of the viewport.
