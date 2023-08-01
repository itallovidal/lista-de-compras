import {AddButton, ErrorSpan, FormWrapper} from "./Form.styled";
import Icon from "react-native-vector-icons/FontAwesome5";
import {TaskInterface} from "../../../../interfaces/interfaces";
import {Keyboard} from "react-native";
import React from 'react';
import {Input} from "../../../../StyledComponents/global.styled";

interface FormProps {
    setTaskList: React.Dispatch<React.SetStateAction<TaskInterface[]>>,
}

function Form({setTaskList}: FormProps) {
    const [task, setTask] = React.useState<string>('')
    const [error, setError] = React.useState<boolean>(false)

    function submitTask(){
        if(task.length >= 3){
            setError(false)
            setTaskList((prevTasks)=> {
                return [{
                    id: prevTasks.length + 1,
                    completed: false,
                    task: task,
                    price: 0
                }, ...prevTasks ]
            })
            setTask('')
        }else if(task.length > 0){
            setError(true)
        }else{
            setError(false)
        }
    }

    return (
        <FormWrapper>
            <Input
                width={'80%'}
                value={task}
                padding={'20px'}
                onChangeText={(text)=> setTask(text)}
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