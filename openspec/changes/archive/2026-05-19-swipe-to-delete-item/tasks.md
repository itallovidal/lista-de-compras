## 1. Dependencies and app setup

- [x] 1.1 Add `react-native-gesture-handler` and `react-native-reanimated` to the project dependencies.
- [x] 1.2 Configure the app entry so gesture handler and reanimated work correctly in Expo.
- [x] 1.3 Verify the app starts without runtime errors after the dependency setup.

## 2. Swipe-to-delete interaction

- [x] 2.1 Wrap the item container with a horizontal gesture-aware component.
- [x] 2.2 Animate the card translation so it follows the user's drag from right to left.
- [x] 2.3 Reveal a delete affordance behind the card while swiping.
- [x] 2.4 Trigger the existing remove callback when the swipe passes the activation threshold.
- [x] 2.5 Snap the card back to its resting position when the swipe is not strong enough.

## 3. Validation

- [x] 3.1 Confirm the tap-to-delete icon still removes the item.
- [x] 3.2 Test the swipe gesture on a real device or emulator.
- [x] 3.3 Update any affected UI/spec notes if the final behavior differs from the initial assumptions.
