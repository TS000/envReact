import React from 'react'
import styled from 'styled-components'

const AddButton = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color};
  border: ${(props) => props.border} 2px solid;
  color: ${(props) => props.font};
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    background: ${(props) => props.font};
    color: ${(props) => props.color};
  }
`

export default ({ handleClick, title, height, width, color, border, font }) => (
  <AddButton
    font={font}
    color={color}
    border={border}
    height={height}
    width={width}
    onClick={handleClick}
  >
    {title}
  </AddButton>
)
