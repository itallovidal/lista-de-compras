import styled from "styled-components/native";

interface SpanProps{
    textColor?: string
}

export const Span = styled.Text<SpanProps>`
  font-size: 16px;
  color: ${({theme, textColor})=> textColor ? textColor : theme.primaryColorLight};
`


interface InputProps{
    width: string
    padding?: string
    align?: string
}
export const Input = styled.TextInput<InputProps>`
  color: white;
  width: ${({width})=>width};
  background-color: ${({theme})=> theme.neutralColor5};
  border-radius: 5px;
  height: 100%;
  text-align: ${({align})=>align ? align : 'left'};
  padding-left: ${({padding})=>padding ? padding : '0'};
  
`