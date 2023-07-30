import { StatusBar } from 'expo-status-bar';
import {FlatList, View} from 'react-native';
import Header from './src/components/Header/Header';
import {TaskInterface} from "./src/interfaces/interfaces";
import {styles} from './appStyle'
import React from "react";
import Form from "./src/components/Form/Form";
import TaskHeader from "./src/components/taskHeader/TaskHeader";
import Task from "./src/components/Task/Task";
import colors from "./src/colors";
import Footer from "./src/components/Footer/Footer";

export default function App() {
  const [taskList, setTaskList] = React.useState<Array<TaskInterface>>([])


  return (
    <View style={{height: '100%'}}>
        <StatusBar
            style={'light'}
            backgroundColor={colors.primaryColorDark}/>

        <Header/>
        <View style={styles.main}>
            <Form setTaskList={setTaskList}/>
            <TaskHeader tasks={taskList}/>

            <FlatList
                data={taskList}
                keyExtractor={(task)=> String(task.id)}
                renderItem={({item})=>(
                    <Task key={item.id} setTaskList={setTaskList} data={item}/>
                )}>
            </FlatList>
        </View>
        <Footer tasks={taskList}/>
    </View>
  );
}
