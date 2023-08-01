import styled from "styled-components/native";

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
  height: 100%;
  border-radius: 5px;
`

export const FormWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
  top: -8%;
  margin: 0 10px 0 10px;
  z-index: 10;
  height: 8%;
`

