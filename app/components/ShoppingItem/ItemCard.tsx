import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
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

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onUpdatePrice,
  onUpdateQuantity,
  onRemove,
}) => {
  const isMinQty = item.quantity <= 1;
  const translateX = useSharedValue(0);
  const cardWidth = useSharedValue(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    cardWidth.value = event.nativeEvent.layout.width;
  };

  const resetCard = () => {
    translateX.value = withSpring(0, { damping: 18, stiffness: 180 });
  };

  const removeItem = () => {
    onRemove();
  };

  const panGesture = Gesture.Pan()
    .activeOffsetX([-8, 8])
    .failOffsetY([-4, 4])
    .onUpdate((event) => {
      if (Math.abs(event.translationY) > Math.abs(event.translationX)) {
        return;
      }

      const nextX = Math.min(
        0,
        Math.max(-DELETE_ACTION_WIDTH, event.translationX),
      );
      translateX.value = nextX;
    })
    .onEnd(() => {
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

  const actionStyle = useAnimatedStyle(() => {
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

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="relative mb-2.5" onLayout={handleLayout}>
      <Animated.View
        pointerEvents="none"
        style={actionStyle}
        className="absolute inset-0 rounded-2xl bg-red-600 flex-row items-center justify-end px-5"
      >
        <TrashIcon size={22} color="white" weight="regular" />
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={cardStyle}
          className="bg-gray-900 rounded-2xl p-2 flex-row items-center gap-1 border border-gray-800 shadow-black/30 shadow-lg max-h-28"
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="flex-1 text-white text-[15px] font-semibold"
          >
            {item.name}
          </Text>

          <View className="p-1 h-full flex-row justify-center items-center border rounded-2xl bg-gray-600">
            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.quantity + 1)}
              activeOpacity={0.7}
              className="p-4"
            >
              <CaretUpIcon size={14} color="white" weight="regular" />
            </TouchableOpacity>

            <Text className="text-white text-sm font-bold min-w-5 text-center">
              {item.quantity}
            </Text>

            <TouchableOpacity
              onPress={() => !isMinQty && onUpdateQuantity(item.quantity - 1)}
              className={`p-4 ${isMinQty ? "opacity-30" : "opacity-100"}`}
              activeOpacity={isMinQty ? 1 : 0.7}
            >
              <CaretDownIcon size={14} color="white" weight="regular" />
            </TouchableOpacity>
          </View>

          <Input
            className="max-w-24 w-full bg-gray-600 border-gray-500 text-center px-4"
            value={item.price > 0 ? item.price.toString() : ""}
            onChangeText={(text) => onUpdatePrice(parseFloat(text) || 0)}
            keyboardType="numeric"
            placeholder="0,00"
            placeholderTextColor="rgba(255,255,255,0.3)"
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};
