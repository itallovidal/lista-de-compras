import React, {useContext, useState} from 'react';
import styled, {useTheme} from "styled-components/native";
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import * as Styles from './ImportList.styled'
import * as gStyles from '../../StyledComponents/global.styled'
import {GlobalContext} from "../../context/GlobalContextProvider";


function ImportList() {
    const navigation = useNavigation()
    const {setNewList} = useContext(GlobalContext)
    const theme = useTheme()
    const [inputState, setInputState] = useState(String)

    function importItems(){
        if(inputState.length > 0){
            const items = inputState.split('\n')
            setNewList(items)
        }

        navigation.navigate('home')
    }

    return (
    <Styles.Wrapper colors={[...theme['gradiente']]}>
        <Styles.Picture>
            <Styles.Img source={require('../../assets/logo.png')}/>
        </Styles.Picture>
        <gStyles.Span textColor={'white'}>Cole a lista abaixo:</gStyles.Span>
        <Styles.ImportInput onChangeText={setInputState} textAlignVertical={"top"} multiline={true} numberOfLines={12} />

        <gStyles.Button onPress={importItems}><Text style={{color: 'white'}}>Importar</Text></gStyles.Button>
    </Styles.Wrapper>
    );
}

export default ImportList;