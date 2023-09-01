import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

export const Wrapper = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  padding: 15px;
`

export const ImportInput = styled.TextInput`
  background: ${({theme})=> theme['gray-500']};
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
`

export const Picture = styled.View`
  height: 140px;
  justify-content: center;
  align-items: center;
  
`
export const Img = styled.Image`
    height: 50%;
    object-fit: contain;
`