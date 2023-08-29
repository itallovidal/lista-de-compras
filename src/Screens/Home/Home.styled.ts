import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";


export const Main = styled.View`
  //background: blue;
`

export const HomeWrapper = styled.View`
  background-color: ${({theme})=> theme['gray-600']};
  height: 100%;
`

export const FinishListButton = styled.TouchableOpacity`
    flex: 1;
    max-height: 100px;
    min-height: 75px;
`

export const GradientWrapper = styled(LinearGradient)`
  //height: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

