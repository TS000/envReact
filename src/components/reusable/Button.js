import React from 'react'
import styled from 'styled-components'

const AddButton = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color};
  border: ${(props) => props.border} 2px solid;
  color: ${(props) => props.font};
  border-radius: 64px;
  font-weight: 700;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;
  &:hover {
    transform: scale(1.1);
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
