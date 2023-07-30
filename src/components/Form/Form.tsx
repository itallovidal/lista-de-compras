import {
    Keyboard,
    NativeSyntheticEvent,
    Text,
    TextInput, TextInputKeyPressEventData,
    TouchableOpacity,
    View
} from "react-native";
import {TaskInterface} from "../../interfaces/interfaces";
import React from 'react';
import {styles} from "./formStyle";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        }else{
            setError(true)
        }
    }


    return (
        <View style={styles.form}>
            <TextInput
                value={task}
                onChangeText={(text)=> setTask(text)}
                onSubmitEditing={()=> {
                    Keyboard.dismiss
                    submitTask()
                }}
                style={styles.taskName}/>

            {error && <Text style={styles.errorMsg}> Ops, preencha corretamente!</Text>}

            <TouchableOpacity onPress={submitTask} style={styles.button} >
                <Icon size={15}   color={'white'} name={'plus'}/>
            </TouchableOpacity>
        </View>
    );
}

export default Form;