import React from 'react';
import type { LucideIcon, LucideProps } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { cn } from '../../lib/utils';

type IconProps = LucideProps & {
  as: LucideIcon;
} & React.RefAttributes<LucideIcon>;

function IconImpl({ as: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}

cssInterop(IconImpl, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: 'size',
      width: 'size',
    },
  },
});

export function Icon({ as: IconComponent, className, size = 14, ...props }: IconProps) {
  return <IconImpl as={IconComponent} className={cn('text-white', className)} size={size} {...props} />;
}
