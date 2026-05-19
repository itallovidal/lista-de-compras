import React from "react";
import { TextInput, TextInputProps } from "react-native";

type InputProps = TextInputProps;

export function Input(props: InputProps) {
  return (
    <TextInput
      {...props}
      className={`rounded-xl border px-3.5 py-3.5 text-white text-base ${props.className ?? ""}`}
    />
  );
}
