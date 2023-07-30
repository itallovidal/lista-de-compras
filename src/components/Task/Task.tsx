import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {TaskInterface} from "../../interfaces/interfaces";
import {styles} from "./TasksStyle";
import Icon from "react-native-vector-icons/FontAwesome5";

interface TaskProps{
    data: TaskInterface,
    setTaskList: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}
function Task({data, setTaskList} : TaskProps) {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)

    const wrapperStyle: Array<{}> = [styles.wrapper]
    if(isChecked)
        wrapperStyle.push(styles.wrapperChecked)

    function deleteTask(){
        setTaskList((prevTasks)=> {
            return prevTasks.filter((prevTask)=>{
                return prevTask.id !== data.id
            })
        })
    }

    function handleCheck(){
        setIsChecked(!isChecked)
        setTaskList((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id){
                    prevTask.completed = !prevTask.completed
                }
                return prevTask
            })
        })
    }

    return (
        <View style={wrapperStyle}>
            <TouchableOpacity
                onPress={handleCheck}
                style={styles.checkbox}>
                {isChecked
                    ? <Icon style={styles.task} size={20} color={'white'} name={'check-circle'}/>
                    : <Icon style={styles.task} size={20} color={'white'} name={'circle'}/>
                }
            </TouchableOpacity>

            <Text style={{color: 'white', flex: 1}}> {data.task} </Text>

            <TouchableOpacity onPress={deleteTask} style={styles.deleteTask}>
                <Icon size={20} color={'tomato'} name={'trash'}/>
            </TouchableOpacity>
        </View>
    );
}

export default Task;