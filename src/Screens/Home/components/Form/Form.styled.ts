import styled from "styled-components/native";
import {InputBase} from "../../../../StyledComponents/global.styled";

export const Input = styled(InputBase)`
    width: 80%;
    padding-left: 15px;
    border-width: 2px;
    border-style: solid;
    background: ${({theme})=>theme['gray-700']};
`

export const FormWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
  //top: -25px;
  background: ${({theme})=>theme['gray-700']};
  padding: 0 10px 0 10px;
  z-index: 10;
  height: 50px;
`

