import React from "react-native";
import colors from "./src/colors";

export const styles = React.StyleSheet.create({
    main:{
        backgroundColor: colors.neutralColor6,
        height: '70%',
        maxHeight: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        fontSize: 24
    },

    taskList:{
        backgroundColor: 'green',
        height: 20
    }
})