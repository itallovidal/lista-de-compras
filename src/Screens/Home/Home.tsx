import React, {useContext} from "react";
import {Keyboard, useWindowDimensions} from "react-native";

import Header from "../../components/header/header";

import {Button, HStack, Icon, Input, VStack, Text} from "native-base";

import {GlobalContext} from "../../context/GlobalContextProvider";
import { Plus } from "phosphor-react-native";
import {KeyboardAwareFlatList} from "react-native-keyboard-aware-scroll-view";
import Product from "./components/Product";
import EmptyListComponent from "./components/emptyListComponent";
import {storeDataList} from "../../utilities/AsyncStorage";
import {IProduct} from "../../@types/interfaces";
import {useForm, Controller} from "react-hook-form";

import z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const formData = z.object({
    product: z.string().min(2, {message: "erro"})
})

interface IFormData extends z.infer<typeof formData>{}

function Home() {
    const {control, handleSubmit, reset, formState:{errors}} = useForm<IFormData>(
        {
            resolver: zodResolver(formData)
        }
    )
    const { height } = useWindowDimensions();
    const {setNewProduct, products} = useContext(GlobalContext)

    React.useEffect(() => {
        if(products.length > 0 && products.length % 10 === 0){
            console.log('setting the data...')
            storeDataList(products).then(()=>console.log("itens guardados"))
        }
    }, [products]);

    function handleForm(data: IFormData){
        reset()
        setNewProduct(data.product)
    }

    const cartTotal = products[0] ? products.reduce((acc, product)=>{
        const qtd = Number(product.quantity) === 0 ? 1 : Number(product.quantity)
        return acc + (Number(product.price) * qtd)
    }, 0 ) : 0

    return (
            <VStack flex={1} paddingBottom={8} bg={"gray.600"}>
                <Header buttonText={"Finalizar"} variant={"home"}/>

                <HStack bg={"gray.700"}>
                    <Controller control={control}
                                name={"product"}
                                render={({field: {onChange, onBlur, value}})=> (
                                    <Input borderWidth={errors.product ? 2 : 0}
                                           borderColor={"red.600"}
                                           onBlur={onBlur}
                                           onChangeText={onChange}
                                           value={value}
                                           h={50}
                                           flex={1}
                                           fontSize={18}
                                           _focus={{
                                               backgroundColor: "gray.700",
                                               borderColor: errors.product ? "red.600" : "black"
                                           }}
                                           color={"white"}
                                           placeholder={"Mamão, pera, uva.."}
                                           placeholderTextColor={"gray.500"}
                                           onSubmitEditing={()=> {
                                               Keyboard.dismiss
                                           }}
                                    />
                                )}/>

                    <Button bg={"transparent"}
                            onPress={handleSubmit(handleForm)}
                            _pressed={{
                                backgroundColor: 'gray.600'
                            }}>
                        <Icon as={<Plus color={"#ffffff"}/>} color="color.600" size={5}/>
                    </Button>
                </HStack>

                <HStack justifyContent={"space-between"} mb={5} p={3} py={5} bg={"gray.700"}>
                    <Text fontSize={16} color={"blue.600"}> Valor Total:</Text>
                    <Text fontSize={16} color={"white"}>R$ {cartTotal}</Text>
                </HStack>

                <KeyboardAwareFlatList
                    style={{height: height - 200}}
                    ListEmptyComponent={<EmptyListComponent/>}
                    extraScrollHeight={130}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps={'always'}
                    data={products}
                    keyExtractor={(product) =>  String(product.id)}
                    renderItem={({item}: {item: IProduct}) => (
                        <Product key={item.id} product={item}/>
                    )}>
                </KeyboardAwareFlatList>
            </VStack>
    );
}

export default Home;
