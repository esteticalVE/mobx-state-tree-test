import React, { useState } from 'react'
import { TodoStore } from '../models'
import { TodoStoreContext } from './TodoStoreContext'

export const TodoStoreProvider: React.FC = ({ children }) => {
  const [todoStore] = useState(() => TodoStore.create())
  return (
    <TodoStoreContext.Provider value={todoStore}>
      {children}
    </TodoStoreContext.Provider>
  )
}
