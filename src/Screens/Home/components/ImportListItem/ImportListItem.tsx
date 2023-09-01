import styled from "styled-components/native";
import {Span} from "../../../../StyledComponents/global.styled";
import * as gStyle from '../../../../StyledComponents/global.styled'
import {Text} from "react-native";
import {ShoppingBag} from "phosphor-react-native";
import {useNavigation} from "@react-navigation/native";

const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: ${({theme})=> theme['gray-600']};
`


function ImportListItem() {
    const navigation = useNavigation()

    function handleClick(){
        navigation.navigate('importList')
    }

    return (
        <Wrapper>
            <ShoppingBag size={52} color={'grey'} weight="fill" />
            <Span textColor={'grey'}>Sem itens.</Span>
            <Span textColor={'white'}>Deseja importar uma lista?</Span>
            <gStyle.Button onPress={handleClick}><Text style={{color:'white'}}>Importar</Text></gStyle.Button>
        </Wrapper>
    );
}

export default ImportListItem;