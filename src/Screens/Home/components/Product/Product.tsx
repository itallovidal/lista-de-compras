import {DeleteButton, TaskWrapper, WrapperInputs} from "./Product.styled";
import {Input, Span} from "../../../../StyledComponents/global.styled";
import Icon from "react-native-vector-icons/FontAwesome5";
import {CartItem} from "../../../../interfaces/interfaces";
import {FlatList} from "react-native";
import React, {useContext} from 'react';
import {useTheme} from "styled-components/native";
import {GlobalContext} from "../../../../context/GlobalContextProvider";

interface TaskProps{
    data: CartItem,
}

function Product({data} : TaskProps) {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)
    const [price, setPrice] = React.useState<string>(()=>{
        if(data.price !== 0){
            return data.price.toString()
        }

        return ''
    })
    const [quantity, setQuantity] = React.useState<string>(()=>{
        if(data){
            return data.quantity.toString()
        }
        return '1'
    })
    const {deleteTask, changeQuantity, changePrice} = useContext(GlobalContext)

    const theme = useTheme()

    function handleChangeQuantity(text: string){
        if(text === '0'){
            setQuantity('1')
            return
        }

        if(text.length < 1){
            setQuantity(text)
            return
        }

        const quantity = parseFloat(text)
        changeQuantity(quantity, data)
        setQuantity(text)
    }

    function handleChangePrice(text: string){
        if(text.length < 1){
            setPrice(text)
            return
        }

        if(text.includes(',')){
            text = text.replace(',', '.')
        }

        const price = text.length > 0 ? parseFloat(text) : 0
        changePrice(price, data)
        setPrice(text)
    }

    return (
        <TaskWrapper start={{ x: 0.7, y: 0 }} colors={[...theme['gradiente']]} >
            <Span textColor={'white'}> {data.itemName} </Span>

            <WrapperInputs >
                <Input
                    width={'35%'}
                    value={price}
                    editable={!isChecked}
                    maxLength={5}
                    align={'center'}
                    keyboardType={'decimal-pad'}
                    onChangeText={handleChangePrice}
                    placeholder={'R$'}
                    placeholderTextColor={'rgba(255,255,255,0.41)'}
                />
                <Input
                    width={'25%'}
                    maxLength={1}
                    align={'center'}
                    editable={!isChecked}
                    keyboardType={'decimal-pad'}
                    value={quantity}
                    placeholderTextColor={'rgba(255,255,255,0.41)'}
                    onChangeText={handleChangeQuantity}
                />

                <DeleteButton onPress={()=> deleteTask(data)}>
                    <Icon size={20} color={'tomato'} name={'trash'}/>
                </DeleteButton>
            </WrapperInputs>
        </TaskWrapper>
    );
}

export default Product;