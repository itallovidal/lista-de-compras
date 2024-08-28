// import { ContextProps, IProduct, ProviderProps } from '../@types/interfaces'
// import { getStoredList } from '../utilities/AsyncStorage'
// import * as crypto from 'expo-crypto'
// import AsyncStorage from '@react-native-async-storage/async-storage'

import { IProduct } from '../@types/interfaces'
import { createContext, ReactNode, useState } from 'react'
import * as crypto from 'expo-crypto'

interface ContextProps {
  list: IProduct[]
  addProductToList: (a: string) => void
  // deleteProduct: (a: string) => void
  //
  // changePrice: (a: string, b: string) => void
  // changeQuantity: (a: string, b: string) => void
  // finishList: () => void
  // setNewList: (a: string[]) => void
}

export const GlobalContext = createContext({} as ContextProps)

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<IProduct[]>([])

  // useEffect(() => {
  //   console.log('getting stored data...')
  //   getStoredList().then((data) => {
  //     if (data) {
  //       setList(data)
  //     }
  //   })
  // }, [])

  function addProductToList(newItem: string) {
    const product = {
      id: `${crypto.randomUUID()}`,
      picked: false,
      name: newItem,
      price: '0',
      quantity: '1',
    }

    console.log('Produto sendo adicionado:')
    console.log(product)

    setList((prevProducts) => {
      return [product, ...prevProducts]
    })
  }

  // function deleteProduct(id: string) {
  //   setList((prevTasks) => {
  //     return prevTasks.filter((prevTask) => {
  //       return prevTask.id !== id
  //     })
  //   })
  // }
  //
  // function changePrice(price: string, id: string) {
  //   setList((prevTasks) => {
  //     return prevTasks.map((prevTask) => {
  //       if (prevTask.id === id) {
  //         prevTask.price = price
  //       }
  //       return prevTask
  //     })
  //   })
  // }
  //
  // function changeQuantity(quantity: string, id: string) {
  //   setList((prevTasks) => {
  //     return prevTasks.map((prevTask) => {
  //       if (prevTask.id === id) {
  //         prevTask.quantity = quantity
  //       }
  //       return prevTask
  //     })
  //   })
  // }

  // function setNewList(list: string[]) {
  //   const newList: IProduct[] = list.map((item) => {
  //     return {
  //       id: `${crypto.randomUUID()}`,
  //       picked: false,
  //       name: item,
  //       price: '0',
  //       quantity: '1',
  //     }
  //   })
  //
  //   setList(newList)
  // }

  // function finishList() {
  //   setList([])
  //   AsyncStorage.clear()
  // }

  return (
    <GlobalContext.Provider
      value={{
        list,
        addProductToList,
        // deleteProduct,
        // changePrice,
        // changeQuantity,
        // finishList,
        // setNewList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
