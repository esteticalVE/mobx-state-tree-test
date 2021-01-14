import { createContext } from 'react'
import { TodoStoreType } from '../models'

export const TodoStoreContext = createContext<TodoStoreType | null>(null)
