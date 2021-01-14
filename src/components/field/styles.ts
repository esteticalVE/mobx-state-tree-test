import styled from 'styled-components'
import { rem } from 'polished'

export const Input = styled.input`
  width: 100%;
  display: block;
  padding: ${rem(16)} ${rem(68)} ${rem(16)} ${rem(24)};
  border: 3px solid #eaeaea;
  border-radius: ${rem(8)};
  outline: none !important;
  color: inherit;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #dad7d7;
  }

  &:focus {
    border-color: #fcbc2e;
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const Error = styled.div`
  color: #e53131;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: ${rem(4)};
  font-size: ${rem(16)};
`
