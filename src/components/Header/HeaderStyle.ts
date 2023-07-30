import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    wrapper:{
        marginTop: 30,
        height: 150,
        flexDirection: 'row',
        backgroundColor: colors.neutralColor7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        width: 250,
        // height: 80,
        objectFit: "contain"
    }
})