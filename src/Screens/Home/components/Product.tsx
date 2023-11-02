import {IProduct} from "../../../@types/interfaces";
import React from 'react';
import {GlobalContext} from "../../../context/GlobalContextProvider";

import {HStack, Text, Icon, Input, Button} from "native-base";

import {Trash} from "phosphor-react-native";

interface TaskProps{
    product: IProduct,
}

function Product({product} : TaskProps) {
    const {deleteProduct, changePrice, changeQuantity} = React.useContext(GlobalContext)

    return (
        <HStack alignItems={"center"}
                rounded={"md"}
                m={3}
                bg={"gray.400"}
                p={5}>

            <Text fontSize={16}
                  color={"white"}
                  flex={3}
                  flexShrink={1}>{product.name}</Text>

            <Input borderWidth={0}
                   mx={1}
                   color={"white"}
                   flex={1}
                   textAlign={"center"}
                   placeholder={"R$"}
                   keyboardType={'numeric'}
                   onChangeText={(text)=> changePrice(text, product.id)}
                   value={product.price}
                   _focus={{
                       backgroundColor: "gray.600"
                   }}
                   backgroundColor={"gray.500"}
            />

            <Input borderWidth={0}
                   mx={1}
                   color={"white"}
                   flex={1}
                   placeholder={"QTD"}
                   textAlign={"center"}
                   keyboardType={'numeric'}
                   onChangeText={(text)=> changeQuantity(text, product.id)}
                   value={product.quantity}
                   _focus={{
                       backgroundColor: "gray.600"
                   }}
                   backgroundColor={"gray.500"}
            />

            <Button bg={"transparent"}
                    onPress={()=> deleteProduct(product.id)}
                    _pressed={{
                        backgroundColor: "gray.600"
                    }}
            >

                <Icon w={50} color={"red.600"} as={<Trash color={"red"}/>}/>
            </Button>
        </HStack>
    );
}

export default Product;

// {/*<TaskWrapper start={{ x: 0.7, y: 0 }} colors={[...theme['gradiente']]} >*/}
// {/*    <Span textColor={'white'}> {product.itemName} </Span>*/}
//
// {/*    <WrapperInputs >*/}
// {/*        <Input*/}
// {/*            width={'35%'}*/}
// {/*            value={price}*/}
// {/*            editable={!isChecked}*/}
// {/*            maxLength={5}*/}
// {/*            align={'center'}*/}
// {/*            keyboardType={'decimal-pad'}*/}
// {/*            onChangeText={handleChangePrice}*/}
// {/*            placeholder={'R$'}*/}
// {/*            placeholderTextColor={'rgba(255,255,255,0.41)'}*/}
// {/*        />*/}
// {/*        <Input*/}
// {/*            width={'25%'}*/}
// {/*            maxLength={1}*/}
// {/*            align={'center'}*/}
// {/*            editable={!isChecked}*/}
// {/*            keyboardType={'decimal-pad'}*/}
// {/*            value={quantity}*/}
// {/*            placeholderTextColor={'rgba(255,255,255,0.41)'}*/}
// {/*            onChangeText={handleChangeQuantity}*/}
// {/*        />*/}
//
// {/*        <DeleteButton onPress={()=> deleteTask(product)}>*/}
// {/*            <Icon size={20} color={'tomato'} name={'trash'}/>*/}
// {/*        </DeleteButton>*/}
// {/*    </WrapperInputs>*/}
// {/*</TaskWrapper>*/}