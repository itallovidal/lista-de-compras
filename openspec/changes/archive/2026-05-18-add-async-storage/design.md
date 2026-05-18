## Context

The app currently stores the shopping list in React state (in-memory only). When the user closes or restarts the app, all data is lost. The goal is to add persistent storage using AsyncStorage so users don't lose their shopping list.

## Goals / Non-Goals

**Goals:**
- Persist shopping list to device storage
- Load saved list on app startup
- Save list automatically when items are added or removed
- Use key `@minhalistadecompras:shopping-list`

**Non-Goals:**
- Real-time sync across devices (single device only)
- Cloud backup or migration
- Offline-first architecture with queue

## Decisions

1. **Use `@react-native-async-storage/async-storage`**
   - Already available in Expo ecosystem
   - Simple key-value storage API
   - No native code required

2. **Save on add/remove only, not on every update**
   - Decision: Only call storage save when `addItem` or `removeItem` is called
   - Rationale: Minimizes storage writes. Updating item properties (price, quantity) happens frequently and doesn't need persistence until item is added/removed
   - Alternative considered: Save on every state change - rejected to avoid excessive writes

3. **Load on component mount with useEffect**
   - Use `useEffect` in ShoppingProvider to load data when component mounts
   - Initial state will be empty while loading, then update once data is retrieved

4. **Storage format: JSON string**
   - Store entire ShoppingList object as JSON string
   - Key: `@minhalistadecompras:shopping-list`

## Risks / Trade-offs

- [Risk] First load may show empty list briefly → Mitigation: Show loading state or skeleton while fetching from storage
- [Risk] Corrupted storage data → Mitigation: Try/catch JSON parsing, reset to empty list on error
- [Risk] Storage operation fails silently → Mitigation: Log errors but don't block user flow