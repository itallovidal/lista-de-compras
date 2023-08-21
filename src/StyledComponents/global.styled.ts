import styled from "styled-components/native";

interface SpanProps{
    textColor?: string
}

export const Span = styled.Text<SpanProps>`
  font-size: 18px;
  color: ${({theme, textColor})=> textColor ? textColor : theme.primaryColorLight};
`


interface InputProps{
    width: string
    padding?: string
    align?: string
}

export const InputBase = styled.TextInput`
  color: white;
  background-color: ${({theme})=> theme.neutralColor5};
  border-radius: 5px;
  height: 100%;
`

export const Input = styled(InputBase)<InputProps>`
  width: ${({width})=>width};
  text-align: ${({align})=>align ? align : 'left'};
  padding-left: ${({padding})=>padding ? padding : '0'};
`



