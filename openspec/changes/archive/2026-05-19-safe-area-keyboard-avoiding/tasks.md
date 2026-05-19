## 1. Safe Area Navigation

- [x] 1.1 Update the bottom tab navigator to use safe-area insets instead of fixed bottom spacing.
- [x] 1.2 Hide the tab bar while the keyboard is open so input screens keep more visible space.

## 2. Keyboard Avoidance

- [x] 2.0 Install `react-native-keyboard-aware-scroll-view` and add it to package.json.
- [x] 2.1 Replace the `KeyboardAvoidingView` wrapper in the shopping list screen with `KeyboardAwareScrollView` so the focused input scrolls into view on Android.
- [x] 2.2 Replace the `KeyboardAvoidingView` wrapper in the import screen with `KeyboardAwareScrollView`.

## 3. Verification

- [x] 3.1 Verify the updated layout compiles and the task checklist reflects completion.
