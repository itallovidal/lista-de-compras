import GlobalContextProvider from "./src/context/GlobalContextProvider";

import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./src/routes/AppRoutes";

import {NativeBaseProvider} from "native-base";
import {THEME} from "./src/theme/theme";

import {StatusBar} from "react-native";
import React from "react";

export default function App() {
    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar backgroundColor={"#121214"} />

            <NavigationContainer>
                <GlobalContextProvider>
                    <AppRoutes/>
                </GlobalContextProvider>
            </NavigationContainer>
        </NativeBaseProvider >
    )
}
