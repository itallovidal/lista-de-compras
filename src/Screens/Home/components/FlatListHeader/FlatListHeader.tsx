import {Span} from "../../../../StyledComponents/global.styled";
import {cartItem} from "../../../../interfaces/interfaces";
import styled from "styled-components/native";
import React from 'react';

const Wrapper = styled.View`
  background-color: black;
  border-bottom-width: 5px;
  border-color: black;
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  margin-bottom: 16px;

`

interface FooterProps{
    products: Array<cartItem>
}
function FlatListHeader({products} : FooterProps) {
    console.log(products[0]?.quantity)
    const totalPrice = products.reduce((acc, item) => {return acc + (item.price * item.quantity) }, 0).toFixed(2)

    return (
        <Wrapper>
            <Span>Valor Total:</Span>
            <Span textColor={'white'}>R${totalPrice}</Span>
        </Wrapper>
    );
}

export default FlatListHeader;