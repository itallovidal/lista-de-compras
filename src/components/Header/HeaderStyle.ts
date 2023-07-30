import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    wrapper:{
        paddingTop: '10%',
        height: '20%',
        flexDirection: 'row',
        backgroundColor: colors.neutralColor7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        width: 250,
        objectFit: "contain"
    }
})