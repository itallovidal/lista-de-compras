import React from 'react';
import {Text, View} from "react-native";
import styles from './FooterStyle'
import {TaskInterface} from "../../interfaces/interfaces";

interface FooterProps{
    tasks: Array<TaskInterface>
}
function Footer({tasks} : FooterProps) {
    const total = tasks.reduce((acc, task) => acc + task.price , 0)

    return (
        <View style={styles.wrapper}>
            <Text style={styles.span}>Valor Total:</Text>
            <Text style={styles.total}>{total}</Text>
        </View>
    );
}

export default Footer;