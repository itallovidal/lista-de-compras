import React, {useRef} from "react";
import {TaskInterface} from "../../interfaces/interfaces";
import {FlatList, KeyboardAvoidingView, StatusBar, TouchableOpacity, View} from "react-native";
import {ThemeProvider} from "styled-components/native";
import {darkTheme} from "../../StyledComponents/theme.styled";
import Header from "./components/Header/Header";
import {Main} from "./Home.styled";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";

function Home() {
    const [taskList, setTaskList] = React.useState<Array<TaskInterface>>([])
    const flatList = useRef<FlatList<TaskInterface>>(null)

    return (
        <ThemeProvider  theme={darkTheme}>
            <View style={{backgroundColor: darkTheme.neutralColor6, height: '100%'}}>
                <StatusBar hidden/>
                <Header/>
                <Form setTaskList={setTaskList}/>
                <Main behavior={'height'}>
                    <FlatList
                        style={{ marginTop: 15, paddingHorizontal: 10, width: '100%'}}
                        ref={flatList}
                        data={taskList}
                        keyExtractor={(task) => String(task.id)}
                        renderItem={({item}) => (
                            <Task key={item.id} flatList={flatList} setTaskList={setTaskList} data={item}/>
                        )}>
                    </FlatList>
                    <Footer tasks={taskList}/>
                </Main>
            </View>
        </ThemeProvider>
    );
}

export default Home;

// header => 20%
// form => 8%
