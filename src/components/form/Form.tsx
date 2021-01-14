import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { FieldComponent, ButtonComponent } from '../../components'
import { useStore } from '../../hooks'
import { Wrapper } from './styles'

const Form: React.FC = () => {
  const { add, setSearchBy } = useStore()
  const [todoText, setTodoText] = useState<string>('')
  const [errorText, setErrorText] = useState<string>('')
  const isEmptyTodoText = todoText === '' || todoText.trim() === ''
  const todoTextChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
    setSearchBy(e.target.value)
  }

  const onAddTodoClickHandler = () => {
    if (isEmptyTodoText) {
      setErrorText('Поле обязательно для заполнения')
      return
    }
    add(todoText)
    setTodoText('')
    setSearchBy('')
  }

  const onAddTodoEnterKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      !isEmptyTodoText && onAddTodoClickHandler()
    }
  }

  return (
    <Wrapper>
      <FieldComponent
        onChange={todoTextChangeHandler}
        onKeyPress={onAddTodoEnterKeyHandler}
        value={todoText}
        placeholder='Введите текст'
        errorText={errorText}
      />
      <ButtonComponent
        onClick={onAddTodoClickHandler}
        text='+'
        disabled={isEmptyTodoText}
      />
    </Wrapper>
  )
}

export const FormComponent = observer(Form)
