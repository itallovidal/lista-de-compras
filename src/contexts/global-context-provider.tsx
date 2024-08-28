// import { getStoredList } from '../utilities/AsyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IProduct } from '../@types/interfaces'
import { createContext, ReactNode, useEffect, useState } from 'react'
import * as crypto from 'expo-crypto'
import { storeProductList } from '../utils/store-product-list'
import { getStoredList } from '../utils/get-stored-list'

interface ContextProps {
  list: IProduct[]
  addProductToList: (a: string) => void
  removeProductFromList: (a: string) => void
  changePrice: (a: string, b: string) => void
  finishList: () => void
  changeQuantity: (a: string, b: string) => void
}

export const GlobalContext = createContext({} as ContextProps)

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<IProduct[]>([])

  useEffect(() => {
    getStoredList().then((data) => {
      if (data) {
        setList(data)
      }
    })
  }, [])

  useEffect(() => {
    if (list.length > 0 && list.length % 3 === 0) {
      storeProductList(list).then(() =>
        console.log('lista salva no local storage.'),
      )
    }
  }, [list.length])

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

  function removeProductFromList(id: string) {
    setList((previousList) =>
      previousList.filter((product) => {
        return product.id !== id
      }),
    )
  }

  function changePrice(price: string, id: string) {
    setList((prevTasks) => {
      return prevTasks.map((prevTask) => {
        if (prevTask.id === id) {
          prevTask.price = price
        }
        return prevTask
      })
    })
  }

  function changeQuantity(quantity: string, id: string) {
    setList((prevTasks) => {
      return prevTasks.map((prevTask) => {
        if (prevTask.id === id) {
          prevTask.quantity = quantity
        }
        return prevTask
      })
    })
  }

  async function finishList() {
    setList([])
    await AsyncStorage.clear()
  }

  return (
    <GlobalContext.Provider
      value={{
        list,
        addProductToList,
        removeProductFromList,
        finishList,
        changePrice,
        changeQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
