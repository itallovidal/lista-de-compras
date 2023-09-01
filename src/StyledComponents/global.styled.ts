import styled from "styled-components/native";

interface SpanProps{
    textColor?: string
}

export const Span = styled.Text<SpanProps>`
  font-size: 18px;
  color: ${({theme, textColor})=> textColor ? textColor : theme['primary']};
`


interface InputProps{
    width: string
    padding?: string
    align?: string
}

export const InputBase = styled.TextInput`
  color: white;
  border-radius: 5px;
  height: 100%;
`

export const Input = styled(InputBase)<InputProps>`
  width: ${({width})=>width};
  text-align: ${({align})=>align ? align : 'left'};
  padding-left: ${({padding})=>padding ? padding : '0'};
`

interface ButtonProps{
    variant?: boolean
}
export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({theme, variant})=> variant ? 'white' : theme['primary']};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  max-height: 50px;
`


