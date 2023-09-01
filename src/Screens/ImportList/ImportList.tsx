import React from 'react';
import styled, {useTheme} from "styled-components/native";
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import * as Styles from './ImportList.styled'
import * as gStyles from '../../StyledComponents/global.styled'


function ImportList() {
    const navigation = useNavigation()
    const theme = useTheme()

    return (
    <Styles.Wrapper colors={[...theme['gradiente']]}>
        <Styles.Picture>
            <Styles.Img source={require('../../assets/logo.png')}/>
        </Styles.Picture>
        <gStyles.Span textColor={'white'}>Cole a lista abaixo:</gStyles.Span>
        <Styles.ImportInput textAlignVertical={"top"} multiline={true} numberOfLines={12} />

        <gStyles.Button onPress={()=> navigation.navigate('home')}><Text style={{color: 'white'}}>Importar</Text></gStyles.Button>
    </Styles.Wrapper>
    );
}

export default ImportList;