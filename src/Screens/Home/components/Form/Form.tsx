import {AddButton, ErrorSpan, FormWrapper} from "./Form.styled";
import Icon from "react-native-vector-icons/FontAwesome5";
import {cartItem} from "../../../../interfaces/interfaces";
import {Keyboard} from "react-native";
import React from 'react';
import {Input} from "../../../../StyledComponents/global.styled";
import uuid from 'react-native-uuid';


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
        <FormWrapper>
            <Input
                width={'80%'}
                value={product}
                padding={'20px'}
                onChangeText={(text)=> setProduct(text)}
                onSubmitEditing={()=> {
                    Keyboard.dismiss
                    submitTask()
                }}
            />


            <AddButton onPress={submitTask} >
                <Icon size={15} color={'white'} name={'plus'}/>
            </AddButton>

            {error && <ErrorSpan> Ops, preencha corretamente!</ErrorSpan>}
        </FormWrapper>
    );
}

export default Form;