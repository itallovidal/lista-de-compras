import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    wrapperChecked:{
        opacity: .3
    },

    wrapper:{
        backgroundColor: colors.neutralColor4,
        minWidth: '90%',
        borderRadius: 5,
        padding: 15,
        justifyContent: "center",
        flexDirection: 'row',
        marginBottom: 15,
    },

    checkbox:{
        width: '10%',
        objectFit: "contain"
    },
    task:{
        color: colors.primaryColorLight,
        flex: 1
    },
    deleteTask:{
        width: '10%',
    }
})