import Icon from "react-native-vector-icons/FontAwesome5";
import {cartItem} from "../../../../interfaces/interfaces";
import {Keyboard} from "react-native";
import React from 'react';
import uuid from 'react-native-uuid';

import * as Style from './Form.styled'


interface FormProps {
    setTaskList: React.Dispatch<React.SetStateAction<cartItem[]>>,
}

function Form({setTaskList}: FormProps) {
    const [product, setProduct] = React.useState<string>('')
    const [error, setError] = React.useState<boolean>(false)

    function submitTask(){
        if(product.length >= 3){
            setError(false)
            setTaskList((prevTasks)=> {
                return [{
                    id: `${uuid.v4()}`,
                    completed: false,
                    itemName: product,
                    price: 0,
                    quantity: 1
                }, ...prevTasks ]
            })
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
                style={{borderColor: error ? 'red' : 'black'}}
                value={product}
                onChangeText={(text)=> setProduct(text)}
                onSubmitEditing={()=> {
                    Keyboard.dismiss
                    submitTask()
                }}
            />


            <Style.AddButton onPress={submitTask} >
                <Icon size={15} color={'white'} name={'plus'}/>
            </Style.AddButton>

            {/*{error && <Style.ErrorSpan> Ops, preencha corretamente!</Style.ErrorSpan>}*/}
        </Style.FormWrapper>
    );
}

export default Form;