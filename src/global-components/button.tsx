import { Pressable, PressableProps, Text } from 'react-native'
import { ReactNode } from 'react'

interface IButtonProps extends PressableProps {
  children: string | ReactNode
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <Pressable
      className={'p-4 bg-blue-700 rounded-md active:opacity-70'}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text className={'text-white'}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  )
}
