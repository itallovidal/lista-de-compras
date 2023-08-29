import Icon from "react-native-vector-icons/FontAwesome5";
import {Keyboard} from "react-native";
import React, {useContext} from 'react';
import uuid from 'react-native-uuid';

import * as gStyle from '../../../../StyledComponents/global.styled'
import * as Style from './Form.styled'


import {useTheme} from "styled-components/native";
import {GlobalContext} from "../../../../context/GlobalContextProvider";




function Form() {
    const [product, setProduct] = React.useState<string>('')
    const [error, setError] = React.useState<boolean>(false)
    const theme = useTheme()
    const {setNewProduct} = useContext(GlobalContext)

    function submitTask(){
        if(product.length >= 3){
            setError(false)
            setNewProduct(product)
            setProduct('')
        }else if(product.length > 0){
            setError(true)
        }else{
            setError(false)
        }
    }


    return (
        <Style.FormWrapper>
            <Style.Input
                style={{borderColor: error ? 'red' : theme['gray-700']}}
                value={product}
                placeholder={'Digite o item:'}
                placeholderTextColor={'grey'}
                onChangeText={(text)=> setProduct(text)}
                onSubmitEditing={()=> {
                    Keyboard.dismiss
                    submitTask()
                }}
            />


            <gStyle.Button onPress={submitTask} >
                <Icon size={15} color={'white'} name={'plus'}/>
            </gStyle.Button>

        </Style.FormWrapper>
    );
}

export default Form;