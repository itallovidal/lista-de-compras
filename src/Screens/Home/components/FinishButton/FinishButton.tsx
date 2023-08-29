import React, {useContext} from 'react';
import * as Style from "../../Home.styled";
import {darkTheme} from "../../../../StyledComponents/theme.styled";
import {Text} from "react-native";
import {GlobalContext} from "../../../../context/GlobalContextProvider";

function FinishButton() {
    const {cartProducts, finishList} = useContext(GlobalContext)

    return (
        <Style.FinishListButton onPress={()=> finishList()} style={{display: cartProducts.length === 0 ? 'none' : 'flex'}}>
            <Style.GradientWrapper start={{ x: 0.7, y: 0 }} colors={[...darkTheme.gradiente]}>
                <Text style={{color:'white'}}>Finalizar Lista</Text>
            </Style.GradientWrapper>
        </Style.FinishListButton>
    );
}

export default FinishButton;