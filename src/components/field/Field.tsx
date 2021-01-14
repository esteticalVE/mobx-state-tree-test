import React, { ChangeEvent, KeyboardEvent } from 'react'
import { Input, Wrapper, Error } from './styles'

type FieldProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  value: string
  labelText?: string
  placeholder?: string
  errorText?: string
}

export const FieldComponent: React.FC<FieldProps> = ({
  onChange,
  onKeyPress,
  value,
  labelText,
  placeholder,
  errorText,
}) => {
  return (
    <Wrapper>
      {labelText && <label htmlFor=''>{labelText}</label>}
      <Input
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
        placeholder={placeholder}
      />
      {errorText && <Error>{errorText}</Error>}
    </Wrapper>
  )
}
