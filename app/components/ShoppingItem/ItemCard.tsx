import React from "react";
import { View, Text, TouchableOpacity, LayoutChangeEvent } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  FadeInUp,
  FadeOut,
  LinearTransition,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { CaretUpIcon, CaretDownIcon, TrashIcon } from "phosphor-react-native";
import { ShoppingItem as ShoppingItemType } from "../../types/shopping";
import { Input } from "../lib/Input";

interface ItemCardProps {
  item: ShoppingItemType;
  onUpdatePrice: (price: number) => void;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

const DELETE_ACTION_WIDTH = 92;
const SWIPE_DELETE_THRESHOLD = 80;

export function ItemCard({
  item,
  onUpdatePrice,
  onUpdateQuantity,
  onRemove,
}: ItemCardProps) {
  const isMinQty = item.quantity <= 1;
  const translateX = useSharedValue(0);
  const cardWidth = useSharedValue(0);

  function handleLayout(event: LayoutChangeEvent) {
    cardWidth.value = event.nativeEvent.layout.width;
  }

  function resetCard() {
    translateX.value = withSpring(0, { damping: 18, stiffness: 180 });
  }

  function removeItem() {
    onRemove();
  }

  function increaseQuantity() {
    onUpdateQuantity(item.quantity + 1);
  }

  function decreaseQuantity() {
    if (!isMinQty) {
      onUpdateQuantity(item.quantity - 1);
    }
  }

  function handlePriceChange(text: string) {
    onUpdatePrice(parseFloat(text) || 0);
  }

  const panGesture = Gesture.Pan()
    .activeOffsetX([-8, 8])
    .failOffsetY([-4, 4])
    .onUpdate(function handlePanUpdate(event) {
      if (Math.abs(event.translationY) > Math.abs(event.translationX)) {
        return;
      }

      const nextX = Math.min(
        0,
        Math.max(-DELETE_ACTION_WIDTH, event.translationX),
      );
      translateX.value = nextX;
    })
    .onEnd(function handlePanEnd() {
      if (translateX.value <= -SWIPE_DELETE_THRESHOLD) {
        translateX.value = withSpring(-cardWidth.value, {
          damping: 20,
          stiffness: 220,
        });
        runOnJS(removeItem)();
        return;
      }

      runOnJS(resetCard)();
    });

  const actionStyle = useAnimatedStyle(function actionStyle() {
    const opacity = interpolate(
      Math.abs(translateX.value),
      [0, DELETE_ACTION_WIDTH],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });

  const cardStyle = useAnimatedStyle(function cardStyle() {
    const opacity = interpolate(
      Math.abs(translateX.value),
      [0, SWIPE_DELETE_THRESHOLD],
      [1, 0.05],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.View
      className="relative mb-2.5"
      entering={FadeInUp.duration(200)}
      exiting={FadeOut.duration(120)}
      layout={LinearTransition.duration(180)}
      onLayout={handleLayout}
    >
      <Animated.View
        pointerEvents="none"
        style={actionStyle}
        className="absolute inset-0 rounded-lg bg-red-600 flex-row items-center justify-end px-5"
      >
        <TrashIcon size={22} color="white" weight="regular" />
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={cardStyle}
          className="bg-gray-900 rounded-lg p-2 flex-row items-center gap-1 border border-gray-800 shadow-black/30 shadow-lg max-h-28"
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="flex-1 text-white text-[15px] font-semibold text-center"
          >
            {item.name}
          </Text>

          <Input
            className="max-w-24 w-full bg-gray-800/80 border-gray-800/70 rounded-lg text-center px-4"
            value={item.price > 0 ? item.price.toString() : ""}
            onChangeText={handlePriceChange}
            keyboardType="numeric"
            placeholder="0,00"
            placeholderTextColor="rgba(255,255,255,0.3)"
          />

          <View className="p-1 h-full flex-row justify-center items-center rounded-lg border-none bg-gray-800/80">
            <TouchableOpacity
              onPress={decreaseQuantity}
              className={`p-4 ${isMinQty ? "opacity-30" : "opacity-100"}`}
              activeOpacity={isMinQty ? 1 : 0.7}
            >
              <CaretDownIcon size={14} color="white" weight="regular" />
            </TouchableOpacity>

            <Text className="text-white text-sm font-bold min-w-5 text-center">
              {item.quantity}
            </Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              activeOpacity={0.7}
              className="p-4"
            >
              <CaretUpIcon size={14} color="white" weight="regular" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
}
