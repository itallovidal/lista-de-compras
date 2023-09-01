import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./src/routes/AppRoutes";
import {darkTheme} from "./src/StyledComponents/theme.styled";
import {ThemeProvider} from "styled-components/native";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalContextProvider>
                <NavigationContainer>
                    <AppRoutes/>
                </NavigationContainer>
            </GlobalContextProvider>
        </ThemeProvider>
    )
}
