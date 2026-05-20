## Why

Shopping together often means two people adding items to the same list while in the same store, but current sync requires cloud infrastructure. This change enables real-time list synchronization between two Android devices using local proximity connection, removing cloud dependency for the most common in-person shopping scenario.

## What Changes

- Add proximity discovery to detect another Android device running the app nearby
- Establish local peer-to-peer connection between two devices
- Synchronize shopping list items bidirectionally in real time
- Support offline editing with automatic merge when devices reconnect
- Display connection status in the UI (disconnected, searching, connected, reconnecting, syncing)

## Capabilities

### New Capabilities

- `proximity-discovery`: Detect nearby Android devices running the app and initiate connection handshake
- `local-sync-session`: Manage peer-to-peer connection lifecycle, message exchange, and reconnection logic
- `event-based-sync`: Synchronize list changes using event-driven protocol with conflict resolution
- `connection-status-ui`: Display real-time connection state to the user in the shopping list screen

### Modified Capabilities

<!-- No existing capabilities have changing requirements -->

## Impact

- New Android native module for proximity discovery and local communication (Wi-Fi Aware or similar)
- Changes to shopping list screen to show connection status and sync state
- New local persistence layer for tracking pending changes and sync events
- Requires development build (not compatible with Expo Go)
- No changes to existing cloud sync or backend services
