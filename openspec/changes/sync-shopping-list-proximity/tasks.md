## 1. Project Setup & Native Module Scaffold

- [x] 1.1 Create Expo config plugin for Wi-Fi Aware Android permissions
- [x] 1.2 Set up Kotlin native module directory structure under `android/`
- [x] 1.3 Add required Android permissions to `app.json` (ACCESS_WIFI_STATE, CHANGE_WIFI_STATE, ACCESS_FINE_LOCATION)
- [x] 1.4 Create TypeScript interface definitions for native module API
- [x] 1.5 Set up expo-sqlite schema for sync events and session state

## 2. Proximity Discovery Implementation

- [x] 2.1 Implement Wi-Fi Aware discovery service in Kotlin
- [x] 2.2 Create device advertising mechanism for proximity mode
- [x] 2.3 Build discovery callback handler for found devices
- [x] 2.4 Add compatibility check for discovered devices (app version, protocol version)
- [x] 2.5 Implement runtime capability detection (Wi-Fi Aware availability)
- [x] 2.6 Create React Native bridge methods for starting/stopping discovery
- [x] 2.7 Add event emitter for discovery results to JavaScript layer

## 3. Connection & Session Management

- [x] 3.1 Implement peer-to-peer connection establishment in Kotlin
- [x] 3.2 Create symmetric connection handler (no host designation)
- [x] 3.3 Build connection state machine (disconnected, connecting, connected, reconnecting)
- [ ] 3.4 Implement user confirmation flow before connecting to new peer
- [x] 3.5 Add automatic reconnection logic when devices return to proximity
- [x] 3.6 Handle Android lifecycle events (foreground/background) for connection persistence
- [x] 3.7 Implement graceful session termination and cleanup
- [x] 3.8 Create session state persistence for crash recovery

## 4. Event-Based Sync Protocol

- [x] 4.1 Define event schema (item-added, item-updated, item-removed, item-marked)
- [x] 4.2 Implement event serialization/deserialization for transmission
- [x] 4.3 Create event queue for pending changes during disconnection
- [x] 4.4 Build delta sync logic using last known sync point
- [x] 4.5 Implement full state exchange for first-time connections
- [x] 4.6 Add event validation layer for received messages
- [x] 4.7 Create sync point tracking per peer device

## 5. Conflict Resolution

- [x] 5.1 Implement last-write-wins conflict resolution using timestamps
- [x] 5.2 Add device ID tiebreaker for identical timestamps
- [x] 5.3 Handle delete-vs-edit conflict scenarios
- [x] 5.4 Create conflict detection during event application
- [x] 5.5 Log conflicts for debugging and future improvement

## 6. Local Persistence Layer

- [x] 6.1 Create SQLite tables for sync events (id, type, itemId, payload, timestamp, actorId, synced)
- [x] 6.2 Implement pending event storage on local changes
- [x] 6.3 Build event retrieval query for unsynced events since sync point
- [x] 6.4 Add session state persistence (sessionId, peerDeviceId, lastSyncPoint, status)
- [x] 6.5 Implement event cleanup after successful sync

## 7. Connection Status UI

- [x] 7.1 Create connection status component with all states (disconnected, searching, connected, reconnecting, syncing)
- [x] 7.2 Add status indicator to shopping list header
- [x] 7.3 Implement real-time status updates via event subscription
- [x] 7.4 Create proximity mode toggle button
- [x] 7.5 Add conflict resolution notification toast
- [x] 7.6 Implement loading indicators for searching and syncing states

## 8. Integration & Testing

- [x] 8.1 Wire native module events to React Native state management
- [x] 8.2 Connect UI status component to native connection state events
- [ ] 8.3 Test discovery flow with two physical Android devices
- [ ] 8.4 Test connection establishment and data sync
- [ ] 8.5 Test disconnection and offline editing
- [ ] 8.6 Test reconnection and pending event synchronization
- [ ] 8.7 Test conflict resolution scenarios
- [ ] 8.8 Test app background/foreground behavior
- [ ] 8.9 Test crash recovery and session restoration
- [ ] 8.10 Document development build process for testing
