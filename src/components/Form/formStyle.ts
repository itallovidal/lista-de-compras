import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    form:{
        backgroundColor: colors.neutralColor6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        gap: 10,
        position: 'relative',
        height: 120,
    },
    taskName:{
        color: 'white',
        padding: 15,
        width: '80%',
        backgroundColor: colors.neutralColor5,
        borderRadius: 5,
        height: 50,
    },

    errorMsg:{
        color: 'tomato',
        position: "absolute",
        left: 15,
        bottom: 15,
    },
    button:{
        backgroundColor: colors.primaryColorLight,
        padding: 15,
        borderRadius: 5,
        height: 50,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: 'white',
    },
})