import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./HeaderStyle";

function Header() {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
        </View>
    );
}

export default Header;

