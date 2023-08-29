import React from "react";

import {darkTheme} from "../../StyledComponents/theme.styled";
import * as Style from './Home.styled'

import Header from "./components/Header/Header";
import FinishButton from "./components/FinishButton/FinishButton";
import ItemList from "./ItemList/ItemList";

import {ThemeProvider} from "styled-components/native";
import GlobalContextProvider from "../../context/GlobalContextProvider";
function Home() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalContextProvider>
                <Style.HomeWrapper>
                    <Header/>
                    <Style.Main>
                        <ItemList/>
                        <FinishButton/>
                    </Style.Main>
                </Style.HomeWrapper>
            </GlobalContextProvider>
        </ThemeProvider>
    );
}

export default Home;
