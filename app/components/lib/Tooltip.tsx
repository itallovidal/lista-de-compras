import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import * as TooltipPrimitive from '@rn-primitives/tooltip';

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal hostName="app-tooltip-host">
        <TooltipPrimitive.Overlay
          closeOnPress
          className="absolute inset-0 bg-black/40"
        />
        <TooltipPrimitive.Content
          side="bottom"
          sideOffset={8}
          className="rounded-2xl border border-gray-700 bg-gray-900 px-4 py-3 max-w-80"
        >
          <Text className="text-white text-sm leading-5">{content}</Text>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
