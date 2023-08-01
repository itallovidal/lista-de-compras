import React, {useRef} from "react";
import {cartItem} from "../../interfaces/interfaces";
import {FlatList, StatusBar, View} from "react-native";
import {ThemeProvider} from "styled-components/native";
import {darkTheme} from "../../StyledComponents/theme.styled";
import Header from "./components/Header/Header";
import {HomeWrapper, Main} from "./Home.styled";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Product from "./components/Product/Product";

function Home() {
    const [cartProducts, setCartProducts] = React.useState<Array<cartItem>>([])
    const flatList = useRef<FlatList<cartItem>>(null)

    return (
        <ThemeProvider  theme={darkTheme}>
            <HomeWrapper>
                <StatusBar hidden/>
                <Header/>
                <Form setTaskList={setCartProducts}/>
                <Main behavior={'height'}>
                    <FlatList
                        style={{ marginTop: 15, paddingHorizontal: 10, width: '100%'}}
                        ref={flatList}
                        data={cartProducts}
                        keyExtractor={(product) => String(product.id)}
                        renderItem={({item}) => (
                            <Product key={item.id} flatList={flatList} setTaskList={setCartProducts} data={item}/>
                        )}>
                    </FlatList>
                    <Footer products={cartProducts}/>
                </Main>
            </HomeWrapper>
        </ThemeProvider>
    );
}

export default Home;
