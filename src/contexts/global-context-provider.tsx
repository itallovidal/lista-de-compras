import AsyncStorage from '@react-native-async-storage/async-storage'
import { IHistoryList, IImportProduct, IProduct } from '../@types/interfaces'
import { createContext, ReactNode, useEffect, useState } from 'react'
import * as crypto from 'expo-crypto'
import { saveActualProductList } from '../utils/save-actual-product-list'
import { getActualProductList } from '../utils/get-actual-product-list'
import { saveListInHistory } from '../utils/save-list-in-history'

interface ContextProps {
  list: IProduct[]
  addProductToList: (a: string) => void
  removeProductFromList: (a: string) => void
  changePrice: (a: string, b: string) => void
  finishList: () => void
  changeQuantity: (a: string, b: string) => void
  importList: (data: IImportProduct[]) => Promise<void>
  reuseList: (a: IProduct[]) => void
}

export const GlobalContext = createContext({} as ContextProps)

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<IProduct[]>([])

  useEffect(() => {
    getActualProductList().then((data) => {
      if (data) {
        setList(data)
      }
    })
  }, [])

  useEffect(() => {
    console.log(list)

    if (list.length > 0 && list.length % 3 === 0) {
      saveActualProductList(list).then(() =>
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
    await saveListInHistory(list)
    setList([])
    await AsyncStorage.removeItem('actual-product-list')
  }

  async function importList(data: IImportProduct[]) {
    console.log('importando..')
    console.log(data)

    const newList = data.map((item) => {
      return {
        id: `${crypto.randomUUID()}`,
        price: '0',
        ...item,
      }
    })

    await saveActualProductList(newList)
    setList(newList)
  }

  async function reuseList(history: IProduct[]) {
    setList(history)
    await saveActualProductList(history)
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
        importList,
        reuseList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
