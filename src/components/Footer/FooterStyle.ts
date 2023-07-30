import {StyleSheet} from "react-native";
import colors from "../../colors";

 const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: colors.neutralColor4,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        height: '10%'
    },
     span:{
        fontSize: 16,
        marginLeft: 15,
         color: 'white'
     },
     total:{
        marginRight: 20,
        fontSize: 24,
        color: 'white'
     }
})

export default styles