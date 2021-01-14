import { useContext } from 'react'
import { TodoStoreContext } from '../contexts'
import { TodoStoreType } from '../models'

export const useStore = (): TodoStoreType => {
  const store = useContext(TodoStoreContext)
  if (!store) {
    throw new Error('Стор не найден')
  }
  return store
}
