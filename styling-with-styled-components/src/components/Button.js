import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: ${(props) => props.theme.blue};
  &:hover {
    background: ${(props) => lighten(0.1, props.theme.blue)};
  }
  &:active {
    background: ${(props) => darken(0.1, props.theme.blue)};
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
