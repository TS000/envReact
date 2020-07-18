import React from 'react'
import styled from 'styled-components'

const AddButton = styled.button `
    background: none;
    border: 2px #7D8A2E solid;
    color: #7D8A2E;
    border-radius: 64px;
    height: 30px;
    width: 30px;
    font-weight: 700;
    cursor: pointer;
    float: right;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0,0,0,0);
    transition-duration: 0.3s;
    transition-property: transform;
    position: absolute;
    top: 20%;
    right: 5%;
    float: ${props => (props.right ? 'right' : 'left')};
        &:hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
`

export default ({ handleClick, direction, title }) =>
  <AddButton direction={direction} onClick={handleClick}> {title} </AddButton>
