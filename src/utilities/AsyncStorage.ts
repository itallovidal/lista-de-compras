import {CartItem} from "../@types/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getStoredList(): Promise<CartItem[] | false> {
    const response = await AsyncStorage.getItem('lastList')
    if(response){
        return JSON.parse(response)
    }
    return false
}


export async function storeDataList(data: CartItem[]): Promise<void>{
    const list = JSON.stringify(data)
    await AsyncStorage.setItem('lastList', list)
    return
}