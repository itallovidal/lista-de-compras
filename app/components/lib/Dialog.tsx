import React, { ReactNode } from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

interface DialogProps {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  children?: ReactNode;
}

export function Dialog({
  open,
  title,
  description,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  onCancel,
  children,
}: DialogProps) {
  const { width } = useWindowDimensions();

  return (
    <Modal transparent visible={open} animationType="fade" onRequestClose={onCancel}>
      <Pressable className="flex-1 bg-black/60 px-5 justify-center items-center" onPress={onCancel}>
        <Pressable
          onPress={(event) => event.stopPropagation()}
          className="w-full rounded-3xl border border-gray-700 bg-gray-900 p-5"
          style={{ maxWidth: Math.min(width - 40, 420) }}
        >
          <Text className="text-white text-xl font-bold">{title}</Text>
          {description ? (
            <Text className="text-gray-300 mt-2 leading-5">{description}</Text>
          ) : null}

          {children ? <View className="mt-4">{children}</View> : null}

          <View className="mt-5 flex-row gap-3 justify-end">
            <Pressable
              onPress={onCancel}
              className="rounded-2xl bg-gray-800 px-4 py-3"
            >
              <Text className="text-white font-semibold">{cancelLabel}</Text>
            </Pressable>
            <Pressable
              onPress={onConfirm}
              className="rounded-2xl bg-blue-500 px-4 py-3"
            >
              <Text className="text-white font-semibold">{confirmLabel}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
