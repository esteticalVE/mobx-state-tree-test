import styled, { keyframes } from 'styled-components'
import { rem } from 'polished'

export const check1 = keyframes`
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(45deg);
  }
  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
  }
`

export const check2 = keyframes`
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(-45deg);
  }
  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }
`

export const firework = keyframes`
  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px #fcbc2e, 0 0 0 -2px #fcbc2e, 0 0 0 -2px #fcbc2e, 0 0 0 -2px #fcbc2e, 0 0 0 -2px #fcbc2e, 0 0 0 -2px #fcbc2e;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px #fcbc2e, 14px -8px 0 0px #fcbc2e, 14px 8px 0 0px #fcbc2e, 0 15px 0 0px #fcbc2e, -14px 8px 0 0px #fcbc2e, -14px -8px 0 0px #fcbc2e;
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  --background: #ffffff;
  --text: inherit;
  --check: #fcbc2e;
  --disabled: #eaeaea;
  --width: 100px;
  --height: 140px;
  --border-radius: 10px;
`

export const ListItem = styled.div`
  margin-bottom: ${rem(5)};
  width: 100%;
  border: none;
  word-break: break-word;
  display: grid;
  grid-template-columns: ${rem(30)} auto ${rem(30)};
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: ${rem(10)};
`

export const Hint = styled.div`
  color: inherit;
  text-align: center;
  opacity: 0.3;
`

export const Label = styled.label`
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
  transition: color 0.3s ease;
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    height: 2px;
    width: ${rem(8)};
    left: ${rem(-27)};
    background: var(--check);
    border-radius: ${rem(2)};
    transition: background-color 0.3s ease;
  }

  &:after {
    height: ${rem(4)};
    width: ${rem(4)};
    top: 50%;
    margin-top: ${rem(-2)};
    left: ${rem(-25)};
    border-radius: 50%;
  }
`

export const Checkbox = styled.input`
  position: relative;
  height: ${rem(15)};
  width: ${rem(15)};
  outline: none;
  border: 0;
  margin: 0 ${rem(15)} 0 0;
  cursor: pointer;
  background: var(--background);
  display: grid;
  align-items: center;
  appearance: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: ${rem(2)};
    top: auto;
    background: var(--check);
    border-radius: ${rem(2)};
  }

  &::before {
    width: 0px;
    right: 60%;
    transform-origin: right bottom;
  }

  &::after {
    width: 0px;
    left: 40%;
    transform-origin: left bottom;
  }

  &:checked {
    &::before {
      animation: ${check1} 0.4s ease forwards;
    }
    &::after {
      animation: ${check2} 0.4s ease forwards;
    }
    + label {
      color: var(--disabled);

      &::before {
        background: transparent;
      }
      &::after {
        animation: ${firework} 0.5s ease forwards 0.1s;
      }
    }
  }
`

export const Remove = styled.button`
  border: 0;
  padding: ${rem(10)};
  background-color: transparent;
  outline: none !important;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.4);
  transition: all 0.3s ease;
  will-change: transform, opacity;

  ${ListItem}:hover & {
    opacity: 0.2;
    transform: scale(0.7);

    &:hover {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media all and (max-width: 767px) {
    opacity: 0.2;
    transform: scale(.7);

    &:active {
      opacity: 1;
      transform: scale(1);
    }
  }
`
