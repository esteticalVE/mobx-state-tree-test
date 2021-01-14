import React from 'react'
import { Button } from './styles'

type ButtonProps = {
  onClick: () => void
  text: string
  disabled: boolean
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  )
}
