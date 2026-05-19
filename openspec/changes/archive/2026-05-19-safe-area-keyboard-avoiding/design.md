## Context

The app already uses `react-native-safe-area-context` and renders all three tabs inside a bottom tab navigator. However, the navigator currently uses fixed tab bar spacing, which is brittle on devices with gesture navigation or larger bottom insets. The main shopping screen also contains inline editable fields inside a scrollable list, so keyboard overlap can hide the active row or its actions.

The app is primarily deployed on Android. The change needs to work within the current Expo + React Navigation setup.

## Goals / Non-Goals

**Goals:**
- Keep the bottom tab bar above the device navigation area on supported mobile devices.
- Keep editable content and low-positioned controls reachable while the keyboard is open.
- Preserve the current navigation structure and screen composition.

**Non-Goals:**
- Redesign the tab bar or shopping screens.
- Change unrelated dialog, history, or import flows beyond what is needed for layout safety.

## Decisions

- Use safe-area insets from `react-native-safe-area-context` in the tab navigator instead of fixed `paddingBottom` and `height` values.
  - Rationale: hardcoded spacing does not adapt to different devices, especially phones with larger bottom system bars.
  - Alternatives considered: leave the current fixed tab bar size, or rely on per-screen padding only. Both leave the navigator itself vulnerable to overlap.

- Hide the tab bar while the keyboard is open for screens that accept text input.
  - Rationale: this frees vertical space when the user is typing and reduces overlap between the keyboard and the bottom navigation.
  - Alternatives considered: keep the tab bar always visible or move it manually on keyboard events. Always-visible navigation wastes space; manual movement is more fragile.

- Use `KeyboardAwareScrollView` from `react-native-keyboard-aware-scroll-view` for scrollable screens that contain text inputs.
  - Rationale: the app is Android-first. Android's keyboard behavior does not automatically scroll to focused inputs the way iOS does with native APIs. `KeyboardAwareScrollView` listens to keyboard events, measures the focused input's position, and scrolls to it on both platforms — no native configuration required.
  - Alternatives considered: `KeyboardAvoidingView` alone — it resizes the container but does not scroll to the focused element, so items near the bottom remain hidden. `automaticallyAdjustKeyboardInsets` on `ScrollView` — iOS 15+ only, does not help on Android.

- Apply keyboard avoidance at the screen level instead of wrapping the whole app.
  - Rationale: only a subset of screens need keyboard-aware behavior, and a global wrapper can interfere with modals and portals.
  - Alternatives considered: wrap `NavigationContainer` or `App` in `KeyboardAvoidingView`. That approach is broader than needed and harder to control.

## Risks / Trade-offs

- [Risk] Keyboard behavior can vary between iOS and Android keyboard modes. → [Mitigation] `KeyboardAwareScrollView` handles both platforms consistently without per-platform branching.
- [Risk] Extra bottom spacing can reduce visible content on small screens. → [Mitigation] Keep spacing tied to the visible tab bar / safe-area inset instead of using large constants.
- [Risk] Hiding the tab bar during typing can slightly change navigation affordance. → [Mitigation] Limit the behavior to keyboard-open states only.
- [Risk] Adding an external library introduces a maintenance dependency. → [Mitigation] `react-native-keyboard-aware-scroll-view` is pure JS with no native code, works in Expo Go, and is widely used.

## Migration Plan

No data migration is required. Update the navigator and affected screen containers in place, then verify the result on devices/emulators with and without bottom system bars.

Rollback is straightforward: restore the fixed tab bar sizing and remove the keyboard-avoidance adjustments if the new behavior introduces regressions.

## Open Questions

- Should the `KeyboardAwareScrollView` pattern be applied to any future input-heavy screens by default, or only to the current shopping/import flows?
