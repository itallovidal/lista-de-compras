import React from 'react';
import {styles} from './taskHeaderStyle'
import {Text, View} from "react-native";
import {TaskInterface} from "../../interfaces/interfaces";

interface TasksHeaderProps{
    tasks: Array<TaskInterface>
}

function TaskHeader({tasks} : TasksHeaderProps) {
    const tasksCompleted = tasks.filter((task)=>{
        return task.completed
    })
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperTitleTasks}>
                <Text style={styles.totalTasks}>Total </Text>
                <Text style={styles.tasksNumber}>{tasks.length}</Text>
            </View>

            <View style={styles.wrapperTitleTasks}>
                <Text style={styles.completedTasks}>Comprados</Text>
                <Text style={styles.tasksNumber}>{tasksCompleted.length}</Text>
            </View>
        </View>
    );
}

export default TaskHeader;