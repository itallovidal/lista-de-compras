import {DeleteButton, TaskWrapper, WrapperInputs} from "./Product.styled";
import {Input, Span} from "../../../../StyledComponents/global.styled";
import Icon from "react-native-vector-icons/FontAwesome5";
import {cartItem} from "../../../../interfaces/interfaces";
import {FlatList} from "react-native";
import React from 'react';

interface TaskProps{
    data: cartItem,
    setTaskList: React.Dispatch<React.SetStateAction<cartItem[]>>
}

function Product({data, setTaskList} : TaskProps) {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)
    const [price, setPrice] = React.useState<string>('')
    const [quantity, setQuantity] = React.useState<string>('1')

    function deleteTask(){
        setTaskList((prevTasks)=> {
            return prevTasks.filter((prevTask)=>{
                return prevTask.id !== data.id
            })
        })
    }

    function changeQuantity(text: string){
        if(text === '0'){
            setQuantity('1')
            return
        }

        if(text.length < 1){
            setQuantity(text)
            return
        }

        const quantity = parseFloat(text)

        setTaskList((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id) {
                    prevTask.quantity = quantity
                    setQuantity(text)
                }
                return prevTask
            })
        })
    }

    function changePrice(text: string){
        if(text.length < 1){
            setPrice(text)
            return
        }

        if(text.includes(',')){
            text = text.replace(',', '.')
        }
        const price = text.length > 0 ? parseFloat(text) : 0

        setTaskList((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id) {
                        prevTask.price = price
                        setPrice(text)
                }
                return prevTask
            })
        })
    }


    return (
        <TaskWrapper >
            <Span textColor={'white'}> {data.itemName} </Span>

            <WrapperInputs >
                <Input
                    width={'35%'}
                    value={price}
                    editable={!isChecked}
                    maxLength={5}
                    align={'center'}
                    keyboardType={'decimal-pad'}
                    onChangeText={changePrice}
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
                    onChangeText={changeQuantity}
                />

                <DeleteButton  onPress={deleteTask}>
                    <Icon size={20} color={'tomato'} name={'trash'}/>
                </DeleteButton>
            </WrapperInputs>
        </TaskWrapper>
    );
}

export default Product;