import styled from "styled-components/native";

export const Header = styled.View`
  background-color: ${({theme}) => theme.neutralColor5 };
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px;
  border-Radius: 5px;
  margin-Bottom: 15px
`