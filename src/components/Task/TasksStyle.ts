import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    wrapperChecked:{
        opacity: .3
    },
    taskname:{
        flex: 1,
        color: 'white',
    },

    taskPrice:{
        color: 'white',
        padding: 15,
        backgroundColor: colors.neutralColor5,
        borderRadius: 5,
        width: '25%'
    },

    wrapper:{
        backgroundColor: colors.neutralColor4,
        minWidth: '90%',
        borderRadius: 5,
        padding: 15,
        justifyContent: "center",
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: "center"
    },





    checkbox:{
        width: '20%',
        justifyContent: "center",
        alignItems: "center",
    },
    task:{
        color: colors.primaryColorLight,
    },
    deleteTask:{
        width: '15%',
        alignItems: "center",
        paddingLeft: 15

    }
})