import {DeleteButton, TaskWrapper, WrapperInputs} from "./Task.styled";
import {Input, Span} from "../../../../StyledComponents/global.styled";
import Icon from "react-native-vector-icons/FontAwesome5";
import {TaskInterface} from "../../../../interfaces/interfaces";
import {FlatList, Text, View} from "react-native";
import React from 'react';

interface TaskProps{
    data: TaskInterface,
    setTaskList: React.Dispatch<React.SetStateAction<TaskInterface[]>>
    flatList:  React.RefObject<FlatList<TaskInterface>>
}

function Task({data, setTaskList, flatList} : TaskProps) {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)

    function deleteTask(){
        setTaskList((prevTasks)=> {
            return prevTasks.filter((prevTask)=>{
                return prevTask.id !== data.id
            })
        })
    }

    function addPrice(text: string){
        if(text.includes(',')){
            text = text.replace(',', '.')
        }

        const price = text.length > 0 ? parseFloat(text) : 0

        setTaskList((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id) {
                    prevTask.price = price
                }
                return prevTask
            })
        })
    }

    return (
        <TaskWrapper >
            <Span textColor={'white'}> {data.task} </Span>

            <WrapperInputs >
                <Input
                    width={'35%'}
                    editable={!isChecked}
                    maxLength={5}
                    align={'center'}
                    keyboardType={'decimal-pad'}
                    // onFocus={()=> flatList.current?.scrollToItem({animated: true, item: data})}
                    // onChangeText={addPrice}
                    placeholder={'R$'}
                    placeholderTextColor={'rgba(255,255,255,0.41)'}
                />
                <Input
                    width={'25%'}
                    maxLength={1}
                    align={'center'}
                    editable={!isChecked}
                    keyboardType={'decimal-pad'}
                    placeholder={'QTD'}
                    placeholderTextColor={'rgba(255,255,255,0.41)'}
                    // onFocus={()=> flatList.current?.scrollToItem({animated: true, item: data})}
                    // onChangeText={addPrice}
                />



                <DeleteButton  onPress={deleteTask}>
                    <Icon size={20} color={'tomato'} name={'trash'}/>
                </DeleteButton>
            </WrapperInputs>
        </TaskWrapper>
    );
}

export default Task;