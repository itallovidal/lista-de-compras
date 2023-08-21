import styled from "styled-components/native";
import {InputBase} from "../../../../StyledComponents/global.styled";

export const ErrorSpan = styled.Text`
  color: tomato;
  left: 15px;
  bottom: 15px;
  width: 100%;
`

export const AddButton = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.primaryColorLight};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 100%;
`
export const Input = styled(InputBase)`
    width: 80%;
    padding-left: 15px;
    border-width: 2px;
    border-style: solid;
`

export const FormWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
  //top: -25px;
  background-color: black;
  padding: 0 10px 0 10px;
  z-index: 10;
  height: 50px;
`

