import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

export const TaskWrapper = styled(LinearGradient)`
  border-radius: 5px;
  padding: 15px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  padding: 5px;
`

export const WrapperInputs = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  //background-color: ${({theme})=>theme['gray-500']};
`