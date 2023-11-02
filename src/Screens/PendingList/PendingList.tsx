// import React from 'react';
// // import styled, {useTheme} from "styled-components/native";
// import * as gStyles from '../../StyledComponents/global.styled'
// import {LinearGradient} from "expo-linear-gradient";
// import {View} from "react-native";
// import {useNavigation} from "@react-navigation/native";
// import {GlobalContext} from "../../context/GlobalContextProvider";
//
// const Wrapper = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0,0,0,.7) ;
//   padding: 15px;
// `
//
// const Popup = styled(LinearGradient)`
//     padding: 15px;
//     align-items: center;
//     height: 35%;
//     border-radius: 15px;
//     width: 100%;
//   justify-content: space-evenly;
//
// `
//
// const ButtonWrapper = styled.View`
//   flex-direction: row;
//   gap: 10px;
//   width: 80%;
// `
//
// function PendingList() {
//     const theme = useTheme()
//     const navigation = useNavigation()
//     const {finishList} = React.useContext(GlobalContext)
//
//
//     function handleDismiss(value: boolean){
//         if(value){
//             finishList()
//         }
//
//         navigation.navigate('home')
//     }
//     return (
//         <Wrapper>
//             <Popup colors={[...theme['gradiente']]}>
//                 <View>
//                     <gStyles.Span style={{textAlign: 'center', }} textColor={'white'}>Parece que você</gStyles.Span>
//                     <gStyles.Span style={{textAlign: 'center', marginBottom: 15}} textColor={'white'}> possui uma lista pendente.</gStyles.Span>
//                 </View>
//                 <gStyles.Span style={{marginBottom: 15}} textColor={'white'}>Deseja continuar com ela?</gStyles.Span>
//
//                 <ButtonWrapper>
//                     <gStyles.Button onPress={ ()=> handleDismiss(true) }><gStyles.Span textColor={'white'}>Finalizar</gStyles.Span></gStyles.Button>
//                     <gStyles.Button onPress={ ()=> handleDismiss(false) } variant={true}><gStyles.Span textColor={'black'}>Continuar</gStyles.Span></gStyles.Button>
//                 </ButtonWrapper>
//             </Popup>
//         </Wrapper>
//     );
// }
//
// export default PendingList;