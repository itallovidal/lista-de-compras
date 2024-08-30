import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated'
import { IHistoryList } from '../../../../@types/interfaces'
import { ListResume } from './list-resume'
import { ListContent } from './list-content'
import { ListFooter } from './list-footer'
import { useState } from 'react'
import { ListContext } from '../../../../contexts/list-context'

export function List({ list, createdAt, id }: IHistoryList) {
  const [isOpen, setIsOpen] = useState(false)

  function handleDetails() {
    setIsOpen((prev) => !prev)
  }

  return (
    <ListContext.Provider
      value={{ handleDetails, createdAt, listID: id, list, isOpen }}
    >
      <Animated.View
        entering={FadeIn}
        exiting={FadeOutUp}
        className={'bg-gray-600  rounded-md p-4'}
      >
        <ListResume />
        <ListContent />
        <ListFooter />
      </Animated.View>
    </ListContext.Provider>
  )
}
