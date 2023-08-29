import {Span} from "../../../../StyledComponents/global.styled";
import {CartItem} from "../../../../interfaces/interfaces";
import styled from "styled-components/native";
import React, {useContext} from 'react';
import {GlobalContext} from "../../../../context/GlobalContextProvider";

const Wrapper = styled.View`
  background-color: ${({theme})=>theme['gray-700']};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  margin-bottom: 16px;
`


function FlatListHeader() {
    const {cartProducts} = useContext(GlobalContext)
    const totalPrice = cartProducts.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0).toFixed(2)

    return (
        <Wrapper>
            <Span>Valor Total:</Span>
            <Span textColor={'white'}>R${totalPrice}</Span>
        </Wrapper>
    );
}

export default FlatListHeader;