import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

type TextAreaProps = TextInputProps;

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <TextInput
      {...props}
      multiline
      textAlignVertical="top"
      className={`min-h-40 rounded-2xl border border-gray-700 bg-gray-800 px-4 py-4 text-white text-base ${props.className ?? ''}`}
    />
  );
};
