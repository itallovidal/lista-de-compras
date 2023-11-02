import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {GlobalContext} from "../../context/GlobalContextProvider";
import {VStack, Image, Text, TextArea, Button, HStack, Input} from "native-base";
import Header from "../../components/header/header";
import {zodResolver} from "@hookform/resolvers/zod";


import z from 'zod'
import {Controller, useForm} from "react-hook-form";
import {Keyboard} from "react-native";

const formData = z.object({
    list: z.string().min(2, {message: "erro"})
})
interface IFormData extends z.infer<typeof formData>{}
function ImportList() {
    const navigation = useNavigation()
    const {setNewList} = React.useContext(GlobalContext)
    const {control, handleSubmit, reset, formState:{errors}} = useForm<IFormData>(
        {
            resolver: zodResolver(formData)
        }
    )

    function importItems(data: IFormData){
        const items = data.list.split('\n')
        setNewList(items)
        navigation.navigate('home')
        reset()
    }

    return (
        <VStack flex={1} paddingBottom={8} bg={"gray.600"}>
            <Header buttonText={"Voltar"} variant={"import"}/>

            <VStack flex={1} p={5}>
                <Text fontSize={32} fontWeight={"bold"} mb={2} color={"white"}>Importação:</Text>
                <Text fontSize={16} mb={5} color={"white"}>Cole a lista abaixo:</Text>

                <Controller control={control}
                            name={"list"}
                            render={({field: {onChange, onBlur, value}})=> (
                                <TextArea color={"white"}
                                          autoCompleteType
                                          bg={"gray.700"}
                                          numberOfLines={12}
                                          fontSize={18}
                                          borderColor={"blue.600"}
                                          flex={1}
                                          value={value}
                                          onBlur={onBlur}
                                          onChangeText={onChange}
                                          _focus={{
                                              backgroundColor: "gray.700"
                                          }}
                                />
                            )}/>


                <Button bg={"blue.600"} onPress={handleSubmit(importItems)}>
                    <Text color={"white"}>Importar!</Text>
                </Button>
            </VStack>

        </VStack>

    );
}

export default ImportList;
