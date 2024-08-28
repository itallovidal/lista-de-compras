import { Pressable, PressableProps, Text } from 'react-native'
import { ReactNode } from 'react'

interface IButtonProps extends PressableProps {
  children?: string | undefined
  icon?: ReactNode
}

export function Button({ children, icon, ...props }: IButtonProps) {
  return (
    <Pressable
      className={'p-4 bg-blue-700 rounded-md active:opacity-70'}
      {...props}
    >
      {children && <Text className={'text-white'}>{children}</Text>}
      {icon && icon}
    </Pressable>
  )
}
