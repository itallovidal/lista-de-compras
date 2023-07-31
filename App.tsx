import { StatusBar } from 'expo-status-bar';
import {FlatList, KeyboardAvoidingView, View} from 'react-native';
import Header from './src/components/Header/Header';
import {TaskInterface} from "./src/interfaces/interfaces";
import {styles} from './appStyle'
import React, {useRef} from "react";
import Form from "./src/components/Form/Form";
import TaskHeader from "./src/components/taskHeader/TaskHeader";
import Task from "./src/components/Task/Task";
import colors from "./src/colors";
import Footer from "./src/components/Footer/Footer";

export default function App() {
  const [taskList, setTaskList] = React.useState<Array<TaskInterface>>([])
    const flatList = useRef<FlatList<TaskInterface>>(null)

  return (
    <View style={{height: '100%'}}>
        <StatusBar
            style={'light'}
            hidden
            />

        <Header/>
        <View style={styles.main}>

            <Form setTaskList={setTaskList}/>
            <TaskHeader tasks={taskList}/>

            <KeyboardAvoidingView style={{height: '65%'}} behavior={'padding'}>
                <FlatList
                    ref={flatList}
                    data={taskList}
                    keyExtractor={(task)=> String(task.id)}
                    renderItem={({item})=>(
                        <Task key={item.id} flatList={flatList} setTaskList={setTaskList} data={item}/>
                    )}>
                </FlatList>
            </KeyboardAvoidingView>
        </View>
        <Footer tasks={taskList}/>
    </View>
  );
}
