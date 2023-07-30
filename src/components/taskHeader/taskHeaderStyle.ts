import React from "react-native";
import colors from "../../colors";

export const styles = React.StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        backgroundColor: colors.neutralColor5,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15
    },
    wrapperTitleTasks:{
        width: `45%`,
        flexDirection: "row",
        justifyContent: "center"
    },

    tasksNumber:{
        color: 'white',
        marginHorizontal: 10
    },

    totalTasks:{
        color: colors.primaryColorLight,
    },

    completedTasks:{
        color: colors.secondarycolorLight,
    },


})