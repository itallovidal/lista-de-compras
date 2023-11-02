import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from 'react';

// import PendingList from "../Screens/PendingList/PendingList";
import ImportList from "../Screens/ImportList/ImportList";
import Home from "../Screens/Home/Home";

import {Export, House} from "phosphor-react-native";
import {Icon} from 'native-base'
import {useTheme} from "native-base";

const {Navigator, Screen} = createBottomTabNavigator()
function AppRoutes() {
    const {colors} = useTheme()

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.blue["600"],
            tabBarInactiveTintColor: colors.gray["200"],

            tabBarStyle: {
                backgroundColor: colors.gray["700"],
                borderTopWidth: 0,
                paddingBottom: 36,
                paddingTop: 36,
                height: "auto"
            }
        }} >
            <Screen name={'home'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ()=> <Icon as={<House color={"#ffffff"}/>} />
                    }}/>

            {/*<Screen name={'popup'} component={PendingList} options={{headerShown: false, presentation: 'transparentModal', animation: 'fade' }} />*/}


            <Screen name={'importList'}
                    component={ImportList}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color})=> <Icon as={<Export color={"#ffffff"}/>} />
                        }}/>

            {/*<Screen name={'history'}*/}
            {/*        component={ImportList}*/}
            {/*        options={{*/}
            {/*            headerShown: false,*/}
            {/*            tabBarIcon: ({color})=> <Icon as={ClockClockwise} color={color}/>*/}
            {/*}}/>*/}
        </Navigator>
    );
}

export default AppRoutes;