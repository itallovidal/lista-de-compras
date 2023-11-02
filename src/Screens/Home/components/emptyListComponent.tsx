import {Icon, VStack, Center,  Text, Button } from 'native-base';
import React from 'react';
import {ShoppingBag} from "phosphor-react-native";
import {useNavigation} from "@react-navigation/native";

function EmptyListComponent() {
    const navigation = useNavigation()

    return (
        <Center h={200}>
            <Icon as={<ShoppingBag size={100} color={'grey'}/>}/>
            <Text fontSize={14} mb={10} color={"white"}>Ops, nada por aqui</Text>

            <Button bg={"blue.600"}
                    _pressed={{
                        backgroundColor: "blue.700"
                    }}
                    onPress={()=> navigation.navigate('importList')}>
                <Text color={"white"}>Importar Lista</Text>
            </Button>

        </Center>
    );
}

export default EmptyListComponent;