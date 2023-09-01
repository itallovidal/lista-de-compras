import React, {ReactNode, useEffect} from 'react';
import {CartItem} from "../interfaces/interfaces";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";






interface ContextProps{
    cartProducts: CartItem[],
    setNewProduct: (a: string)=> void,
    changePrice: (a: number, b: CartItem)=> void,
    changeQuantity: (a: number, b: CartItem)=> void,
    deleteTask: (a: CartItem)=> void,
    finishList: ()=> void,
    setNewList: (a: string[]) => void
}

interface ProviderProps{
    children: ReactNode
}

async function getStoredList(): Promise<CartItem[] | false> {
    const response = await AsyncStorage.getItem('lastList')
    if(response){
        return JSON.parse(response)
    }
    return false
}

async function storeDataList(data: CartItem[]): Promise<void>{
    const list = JSON.stringify(data)
    await AsyncStorage.setItem('lastList', list)
    return
}

export const GlobalContext = React.createContext({} as ContextProps)
function GlobalContextProvider({children}: ProviderProps) {
    const [cartProducts, setCartProducts] = React.useState<Array<CartItem>>([])
    const navigation = useNavigation()



    useEffect(() => {
        console.log('getting stored data...')
        getStoredList().then(data =>{
            if(data){
                setCartProducts(data)
                navigation.navigate('popup')
            }
        })
    }, []);

    useEffect(() => {
        if(cartProducts.length > 0){
            console.log('setting the data...')
            storeDataList(cartProducts)
        }
    }, [cartProducts]);

    function setNewProduct(product: string){
        setCartProducts((prevProducts)=> {
            return [{
                id: `${uuid.v4()}`,
                completed: false,
                itemName: product,
                price: 0,
                quantity: 1
            }, ...prevProducts ]
        })
    }

    function setNewList(list: string[]){
        const newList: CartItem[] = list.map((item)=>{
            return {
                id: `${uuid.v4()}`,
                completed: false,
                itemName: item,
                price: 0,
                quantity: 0
            }
        })

        setCartProducts(newList)
    }

    function deleteTask(data: CartItem){
        setCartProducts((prevTasks)=> {
            return prevTasks.filter((prevTask)=>{
                return prevTask.id !== data.id
            })
        })
    }

    function changeQuantity(quantity: number, data: CartItem){
        setCartProducts((prevTasks)=> {

            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id) {
                    prevTask.quantity = quantity
                }
                return prevTask
            })
        })
    }

    function changePrice(price: number, data: CartItem){
        setCartProducts((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === data.id) {
                    prevTask.price = price
                }
                return prevTask
            })
        })
    }

    function finishList(){
        setCartProducts([])
        AsyncStorage.clear()
    }

    return (
        <GlobalContext.Provider value={{cartProducts, setNewProduct, changePrice, changeQuantity, deleteTask, finishList, setNewList }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;