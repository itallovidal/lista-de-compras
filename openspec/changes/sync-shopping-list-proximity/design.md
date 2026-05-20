## Context

The app currently supports offline shopping list management. Users can create lists, add items, and mark them as purchased. However, when two people shop together, they cannot collaborate on the same list in real time without cloud infrastructure.

This change introduces proximity-based synchronization between two Android devices, enabling real-time collaboration during in-person shopping without requiring internet connectivity.

Constraints:
- Must work within Expo managed workflow via development build
- Android-only for this phase
- Maximum 2 devices per session
- Cannot rely on cloud services for the primary sync path

## Goals / Non-Goals

**Goals:**
- Enable automatic discovery of nearby devices running the app
- Establish peer-to-peer local connection with minimal user interaction
- Synchronize list changes bidirectionally in real time
- Support offline editing with automatic conflict resolution on reconnect
- Provide clear connection status feedback in the UI

**Non-Goals:**
- iOS support (future consideration)
- Cloud-based remote sync (already handled separately)
- More than 2 devices per session
- Chat, comments, or file attachments
- Sync over internet/WAN

## Decisions

### D-01: Proximity technology — Wi-Fi Aware (Neighbor Awareness Networking)

**Decision:** Use Wi-Fi Aware (NAN) for device discovery and local communication.

**Rationale:** Wi-Fi Aware is designed for peer-to-peer discovery without requiring an access point. It works on Android 8.0+ and provides low-latency discovery and messaging. Alternatives considered:

- **Bluetooth Low Energy (BLE):** Slower data transfer, more complex pairing, better for beacon-style discovery but not ideal for real-time sync.
- **Wi-Fi Direct:** Requires one device to act as hotspot, higher battery drain, more complex connection management.
- **Local network mDNS:** Requires both devices on same Wi-Fi network, which may not be available in stores.

Wi-Fi Aware provides the best balance of discovery speed, data throughput, and user friction for this use case.

### D-02: Connection model — Symmetric peer-to-peer

**Decision:** Both devices operate as equal peers with no designated host.

**Rationale:** Symmetric connection simplifies the model — either device can initiate sync, and both maintain identical state. A host-based model would add complexity around host election and failover. With symmetric peers:
- Both devices discover each other simultaneously
- Either can send/receive events
- Conflict resolution uses timestamp-based last-write-wins

### D-03: Sync protocol — Event-driven with version tracking

**Decision:** Synchronize using discrete events (item added, updated, removed, marked) with per-item version tracking.

**Rationale:** Event-driven sync is more resilient to conflicts than full-state sync. Each change generates a small event with:
- Event type (add/update/remove/mark)
- Item ID
- Actor device ID
- Timestamp
- Payload (item data)

On reconnect, devices exchange events since their last known sync point. This minimizes data transfer and makes conflict resolution straightforward.

### D-04: Conflict resolution — Last-write-wins by timestamp

**Decision:** When both devices modify the same item, the most recent change wins based on timestamp.

**Rationale:** Simple and deterministic. For the shopping list use case, the most recent edit is almost always the intended state. More sophisticated field-level or operation-based resolution can be added later if needed.

### D-05: Native module architecture — Expo Config Plugin + Kotlin module

**Decision:** Create a custom Expo development plugin with a Kotlin native module for Wi-Fi Aware functionality.

**Rationale:** The Expo managed workflow supports custom native modules via development builds. Kotlin is the recommended language for Android development. The module will:
- Expose discovery, connection, and messaging APIs to React Native
- Handle Android lifecycle events (foreground/background)
- Emit events to JS layer for connection state changes

### D-06: Local persistence — SQLite via expo-sqlite

**Decision:** Use expo-sqlite for local storage of lists, items, and pending sync events.

**Rationale:** Already available in the Expo ecosystem, provides reliable local storage, and supports the query patterns needed for sync (finding pending events, version lookups).

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Wi-Fi Aware not available on all Android devices | Graceful fallback to offline-only mode; detect capability at runtime |
| Store Wi-Fi interference affects discovery | Use multiple discovery attempts; show clear status to user |
| Battery drain from continuous discovery | Throttle discovery scans; pause when app is backgrounded |
| Conflict resolution loses user intent | Last-write-wins is simple but may overwrite intentional changes; log conflicts for future improvement |
| Development build required for testing | Document build process clearly; provide test scripts |
| Session state lost on app crash | Persist session state locally; recover on restart |
