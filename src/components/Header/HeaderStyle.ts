import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    wrapper:{
        // paddingTop: '10%',
        height: '20%',
        minHeight: 150,
        backgroundColor: colors.neutralColor7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        height: '50%',
        objectFit: "scale-down"
    }
})