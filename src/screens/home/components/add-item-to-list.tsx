import { useContext, useState } from 'react'
import { Keyboard, TextInput, View } from 'react-native'
import { Button } from '../../../global-components/button'
import { Plus } from 'lucide-react-native'
import { GlobalContext } from '../../../contexts/global-context-provider'

export function AddItemToList() {
  const [item, setItem] = useState('')
  const [error, setError] = useState(false)
  const { addProductToList } = useContext(GlobalContext)

  function handleAddItemToList() {
    if (item.length < 2) return setError(true)
    if (error) setError(false)

    addProductToList(item)
    setItem('')
  }

  return (
    <View className={'flex-row items-center max-h-24 gap-4 p-4 '}>
      <TextInput
        value={item}
        onChangeText={setItem}
        onSubmitEditing={() => {
          Keyboard.dismiss()
        }}
        placeholder={'Mamão, pera, uva..'}
        className={`flex-1 rounded-md  p-4 bg-white border-b-4 border-white ${error && 'border-red-600'}`}
      />
      <Button
        onPress={handleAddItemToList}
        icon={<Plus color={'white'} size={16} />}
      />
    </View>
  )
}
