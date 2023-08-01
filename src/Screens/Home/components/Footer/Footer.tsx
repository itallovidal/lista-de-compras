import {Span} from "../../../../StyledComponents/global.styled";
import {cartItem} from "../../../../interfaces/interfaces";
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
    products: Array<cartItem>
}
function Footer({products} : FooterProps) {
    console.log(products[0]?.quantity)
    const totalPrice = products.reduce((acc, item) => {return acc + (item.price * item.quantity) }, 0).toFixed(2)

    return (
        <FooterWrapper>
            <Span>Valor Total:</Span>
            <Span textColor={'white'}>R${totalPrice}</Span>
        </FooterWrapper>
    );
}

export default Footer;