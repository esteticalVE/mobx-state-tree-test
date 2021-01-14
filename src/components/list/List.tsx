import React from 'react'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'

import {
  Wrapper,
  Hint,
  ListWrapper,
  ListItem,
  Label,
  Checkbox,
  Remove,
} from './styles'

const List: React.FC = () => {
  const { remove, filteredTodos, toggleComplete } = useStore()
  return (
    <Wrapper>
      {filteredTodos.length ? (
        <ListWrapper>
          {filteredTodos.map(item => {
            return (
              <ListItem key={item.id}>
                <Checkbox
                  onChange={() => toggleComplete(item.id)}
                  type='checkbox'
                  checked={item.isDone}
                  name={`todo-${item.id}`}
                  id={`todo-${item.id}`}
                />
                <Label htmlFor={`todo-${item.id}`}>{item.value}</Label>
                <Remove type='button' onClick={() => remove(item.id)}>
                  ✕
                </Remove>
              </ListItem>
            )
          }).reverse()}
        </ListWrapper>
      ) : (
        <Hint>Ничего нет, добавьте что-нибудь!</Hint>
      )}
    </Wrapper>
  )
}

export const ListComponent = observer(List)
