import React, { ReactNode, useState } from 'react';
import { Modal, Pressable, Text, View, useWindowDimensions } from 'react-native';

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>{children}</Pressable>
      <Modal transparent visible={open} animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable className="flex-1 bg-black/40 px-5 justify-center items-center" onPress={() => setOpen(false)}>
          <Pressable
            onPress={(event) => event.stopPropagation()}
            className="rounded-2xl border border-gray-700 bg-gray-900 px-4 py-3"
            style={{ maxWidth: Math.min(width - 40, 320) }}
          >
            <Text className="text-white text-sm leading-5">{content}</Text>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
