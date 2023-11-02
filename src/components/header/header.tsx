import React, {useContext} from 'react';
import {Button, HStack, Image, Text} from "native-base";
import logo from '../../assets/logo.png'
import {useNavigation} from "@react-navigation/native";
import {GlobalContext} from "../../context/GlobalContextProvider";

interface IHeaderProps {
    buttonText: string,
    variant: "home" | "history" | "import"
}


function Header({buttonText, variant}: IHeaderProps) {
    const navigation = useNavigation()
    const {finishList} = useContext(GlobalContext)


    return (
        <HStack bg={"gray.700"}  p={5} alignItems={"center"} justifyContent={"space-between"}>
            <Image source={logo}
                   alt={""}
                   resizeMode={"contain"}
                   h={50}
                   w={200}
            />

            <Button onPress={ ()=>{
                variant === "home" ? finishList() : navigation.navigate("home")
                    }} bg={"transparent"}
                    w={20}
                    _pressed={{
                        backgroundColor: "blue.600"
                    }}
            >
                <Text color={"white"}>{buttonText}</Text>
            </Button>
        </HStack>
    );
}

export default Header;