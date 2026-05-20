import { useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { useConflictResolution } from "../../hooks/useConflictResolution";

interface ConflictToastProps {
  visible: boolean;
  conflictCount: number;
  onDismiss: () => void;
}

export function ConflictToast({ visible, conflictCount, onDismiss }: ConflictToastProps) {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => onDismiss());
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        position: 'absolute',
        bottom: 100,
        left: 16,
        right: 16,
      }}
    >
      <View className="bg-yellow-900/90 border border-yellow-700 rounded-lg px-4 py-3">
        <Text className="text-yellow-100 text-sm font-semibold mb-1">
          Conflito resolvido
        </Text>
        <Text className="text-yellow-200 text-xs">
          {conflictCount === 1
            ? '1 alteração foi sincronizada automaticamente'
            : `${conflictCount} alterações foram sincronizadas automaticamente`}
        </Text>
      </View>
    </Animated.View>
  );
}
