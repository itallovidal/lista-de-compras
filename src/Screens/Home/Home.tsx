import React, {useRef} from "react";
import {cartItem} from "../../interfaces/interfaces";
import {FlatList, StatusBar, } from "react-native";
import {ThemeProvider} from "styled-components/native";
import {darkTheme} from "../../StyledComponents/theme.styled";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Product from "./components/Product/Product";
import {Keyboard} from 'react-native'
import * as Style from './Home.styled'
import {KeyboardAwareFlatList} from "react-native-keyboard-aware-scroll-view";
import FlatListHeader from "./components/FlatListHeader/FlatListHeader";

function Home() {
    const [cartProducts, setCartProducts] = React.useState<Array<cartItem>>([])
    const myList = React.useRef<FlatList>(null)
    const [isShow, setIsShow] = React.useState(false)

    Keyboard.addListener('keyboardDidHide',(e)=>{
        setIsShow(false)
    })

    Keyboard.addListener('keyboardDidShow',()=>{
        setIsShow(true)
    })

    return (
        <ThemeProvider  theme={darkTheme}>
            <Style.HomeWrapper>
                <StatusBar hidden/>
                <Header/>
                <Form setTaskList={setCartProducts}/>

                <Style.Main>
                    <FlatListHeader products={cartProducts}/>
                    <KeyboardAwareFlatList
                        extraScrollHeight={155}
                        enableOnAndroid={true}
                        keyboardShouldPersistTaps={'always'}
                        data={cartProducts}
                        keyExtractor={(product) =>  String(product.id)}
                        renderItem={({item}: {item: cartItem}) => (
                            <Product key={item.id} setTaskList={setCartProducts} data={item}/>
                        )}>
                    </KeyboardAwareFlatList>
                </Style.Main>
            </Style.HomeWrapper>
        </ThemeProvider>
    );
}

export default Home;
