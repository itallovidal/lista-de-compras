import React from "react";

import * as Style from './Home.styled'

import Header from "./components/Header/Header";
import FinishButton from "./components/FinishButton/FinishButton";
import ItemList from "./ItemList/ItemList";


function Home() {
    return (
            <Style.HomeWrapper>
                <Header/>
                <Style.Main>
                    <ItemList/>
                    <FinishButton/>
                </Style.Main>
            </Style.HomeWrapper>
    );
}

export default Home;
