import styled from "styled-components/native";

export const TaskWrapper = styled.View`
  background-color: ${({theme})=>theme.neutralColor4};
  min-width: 90%;
  border-radius: 5px;
  padding: 15px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
`

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  padding: 5px;
`

export const WrapperInputs = styled.View`
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  align-items: center;
`