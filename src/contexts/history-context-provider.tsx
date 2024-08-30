import { IHistoryList } from '../@types/interfaces'
import { createContext, ReactNode, useState } from 'react'
import { updateHistory } from '../utils/update-history'

interface ContextProps {
  history: IHistoryList[]
  handleSetHistory: (history: IHistoryList[]) => void
  handleRemoveHistoryRecordById: (id: string) => void
}

export const HistoryContext = createContext({} as ContextProps)

export function HistoryContextProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<IHistoryList[]>([])

  function handleSetHistory(history: IHistoryList[]) {
    setHistory(history)
  }

  async function handleRemoveHistoryRecordById(id: string) {
    const updatedHistory = history.filter((record) => record.id !== id)
    await updateHistory(updatedHistory)
    setHistory(updatedHistory)
  }

  return (
    <HistoryContext.Provider
      value={{ history, handleSetHistory, handleRemoveHistoryRecordById }}
    >
      {children}
    </HistoryContext.Provider>
  )
}
