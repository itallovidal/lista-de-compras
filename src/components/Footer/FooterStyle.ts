import {StyleSheet} from "react-native";
import colors from "../../colors";

 const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        height: '10%'
    },
     span:{
        fontSize: 16,
        marginLeft: 15,
         color: colors.primaryColorLight
     },
     total:{
        marginRight: 20,
        fontSize: 24,
        color: 'white'
     }
})

export default styles