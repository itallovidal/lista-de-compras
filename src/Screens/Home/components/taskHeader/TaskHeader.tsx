import React from 'react';
import {styles} from './taskHeaderStyle'
import {Text, View} from "react-native";
import {cartItem} from "../../../../interfaces/interfaces";
import {Header} from "./TaskHeader.styled";

interface TasksHeaderProps{
    tasks: Array<cartItem>
}

function TaskHeader({tasks} : TasksHeaderProps) {
    const tasksCompleted = tasks.filter((task)=>{
        return task.completed
    })


    return (
        <Header>
            <View style={styles.wrapperTitleTasks}>
                <Text style={styles.totalTasks}> Total </Text>
                <Text style={styles.tasksNumber}>{tasks.length}</Text>
            </View>

            <View style={styles.wrapperTitleTasks}>
                <Text style={styles.completedTasks}>Comprados</Text>
                <Text style={styles.tasksNumber}>{tasksCompleted.length}</Text>
            </View>
        </Header>
    );
}

export default TaskHeader;