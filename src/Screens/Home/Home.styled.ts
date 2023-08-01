import styled from "styled-components/native";
import {darkTheme} from "../../StyledComponents/theme.styled";

export const Main = styled.KeyboardAvoidingView`
  background-color: ${({theme})=> theme.neutralColor6};
  flex-grow: 1;
  max-height: 72%;
  justify-content: flex-start;
  align-items: center;
`

export const HomeWrapper = styled.View`
  background-color: ${({theme})=> theme.neutralColor6};
  height: 100%
`