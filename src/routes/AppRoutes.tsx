import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../Screens/Home/Home";
import ImportList from "../Screens/ImportList/ImportList";
import PendingList from "../Screens/PendingList/PendingList";

const {Navigator, Screen} = createNativeStackNavigator()
function AppRoutes() {
    return (
        <Navigator screenOptions={{animation: 'slide_from_bottom'}} >
            <Screen name={'home'} component={Home} options={{headerShown: false}} />
            <Screen name={'popup'} component={PendingList} options={{headerShown: false, presentation: 'transparentModal', animation: 'fade' }} />
            <Screen name={'importList'} component={ImportList} options={{headerShown: false}} />
        </Navigator>
    );
}

export default AppRoutes;