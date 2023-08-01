import {Span} from "../../../../StyledComponents/global.styled";
import {TaskInterface} from "../../../../interfaces/interfaces";
import styled from "styled-components/native";
import React from 'react';

const FooterWrapper = styled.View`
  background-color: black;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 10%;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  
`

interface FooterProps{
    tasks: Array<TaskInterface>
}
function Footer({tasks} : FooterProps) {
    const total = tasks.reduce((acc, task) => acc + task.price , 0).toFixed(2)

    return (
        <FooterWrapper>
            <Span>Valor Total:</Span>
            <Span textColor={'white'}>R${total}</Span>
        </FooterWrapper>
    );
}

export default Footer;