import styled from 'styled-components'
import { rem, lighten, darken } from 'polished'

export const Button = styled.button`
  position: absolute;
  padding: ${rem(2)} ${rem(14)};
  right: ${rem(6)};
  top: ${rem(6)};
  bottom: ${rem(6)};
  border: 0;
  border-radius: ${rem(6)};
  background-color: #fcbc2e;
  font-family: inherit;
  font-weight: bold;
  font-size: ${rem(38)};
  line-height: ${rem(38)};
  color: white;
  cursor: pointer;
  outline: none !important;
  transition: background-color .3s ease;

  &:hover {
    background-color: ${lighten(.05, "#fcbc2e")}
  }

  &:active {
    background-color: ${darken(.08, "#fcbc2e")}
  }

  &[disabled] {
    background-color: #eaeaea !important;
    cursor: default;
  }
`
