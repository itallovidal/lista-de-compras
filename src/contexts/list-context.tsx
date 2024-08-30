import { IProduct } from '../@types/interfaces'
import { createContext } from 'react'

interface IListProps {
  handleDetails: () => void
  list: IProduct[]
  listID: string
  createdAt: Date
  isOpen: boolean
}

export const ListContext = createContext({} as IListProps)
