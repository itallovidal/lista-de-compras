import {ReactNode} from "react";

export interface ContextProps{
    products: IProduct[],
    setNewProduct: (a: string)=> void,
    deleteProduct: (a: string)=> void,

    changePrice: (a: string, b: string)=> void,
    changeQuantity: (a: string, b: string)=> void,
    finishList: ()=> void,
    setNewList: (a: string[]) => void
}

export interface ProviderProps{
    children: ReactNode
}

export interface IProduct {
    id: string,
    name: string,
    price: string,
    quantity: string,
    picked: boolean
}