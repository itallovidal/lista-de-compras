import 'nativewind/types';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface TextInputProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  interface ScrollViewProps {
    className?: string;
  }
  interface FlatListProps<T> {
    className?: string;
  }
  interface SafeAreaViewProps {
    className?: string;
  }
}