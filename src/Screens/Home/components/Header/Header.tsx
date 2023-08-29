import styled, {useTheme} from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import Form from "../Form/Form";
import FlatListHeader from "../FlatListHeader/FlatListHeader";
import React from "react";
import {StatusBar} from "react-native";

const Wrapper = styled(LinearGradient)`
  height: 140px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`

const Img = styled.Image`
    height: 50%;
    object-fit: scale-down;
`

function Header() {
    const theme = useTheme()
    return (
        <>
            <StatusBar hidden/>
            <Wrapper colors={[...theme['gradiente']]}>
                <Img source={require('../../../../assets/logo.png')}/>
            </Wrapper>
            <Form/>
            <FlatListHeader/>
        </>

    );
}

export default Header;

