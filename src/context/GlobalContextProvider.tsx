import React from 'react';
import {ContextProps, IProduct, ProviderProps} from "../@types/interfaces";
import {getStoredList} from "../utilities/AsyncStorage";
import * as crypto from 'expo-crypto';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalContext = React.createContext({} as ContextProps)
function GlobalContextProvider({children}: ProviderProps) {
    const [products, setProducts] = React.useState<IProduct[]>([])

    console.log("context")
    React.useEffect(() => {
        console.log('getting stored data...')
        getStoredList().then(data =>{
            if(data){
                setProducts(data)
            }
        })
    }, []);

    function setNewProduct(product: string){
        console.log(product)
        setProducts((prevProducts)=> {
            return [{
                id: `${crypto.randomUUID()}`,
                picked: false,
                name: product,
                price: "0",
                quantity: "1"
            }, ...prevProducts ]
        })
    }

    function deleteProduct(id: string){
        setProducts((prevTasks)=> {
            return prevTasks.filter((prevTask)=>{
                return prevTask.id !== id
            })
        })
    }

    function changePrice(price: string, id: string){
        setProducts((prevTasks)=> {
            return prevTasks.map((prevTask)=>{
                if(prevTask.id === id) {
                    prevTask.price = price
                }
                return prevTask
            })
        })
    }

    function changeQuantity(quantity: string, id: string){
        setProducts((prevTasks)=> {

            return prevTasks.map((prevTask)=>{
                if(prevTask.id === id) {
                    prevTask.quantity = quantity
                }
                return prevTask
            })
        })
    }

    function setNewList(list: string[]){
        const newList: IProduct[] = list.map((item)=>{
            return {
                id: `${crypto.randomUUID()}`,
                picked: false,
                name: item,
                price: "0",
                quantity: "1"
            }
        })

        setProducts(newList)
    }

    function finishList(){
        setProducts([])
        AsyncStorage.clear()
    }

    return (
        <GlobalContext.Provider value={{products,
                                        setNewProduct,
                                        deleteProduct,
                                        changePrice,
                                        changeQuantity,
                                        finishList,
                                        setNewList
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;