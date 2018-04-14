import React from 'react'
import styled from 'styled-components'

const CoolButton = styled.button`
  list-style: none
  text-transform: uppercase
  background-color: #fff
  border: none
  padding: 8px 60px
  color: #585858
  transition: all .1s
  &:hover {
      background: grey
      color: #fff
      cursor: pointer
      border: none
    }
   &:active {
      box-shadow: inset 0 0 10px #000000
   }
   &:focus {
    outline: none
   }
`

export default class Button extends React.Component {
  render() {
    return (
      <CoolButton onClick={this.props.onClick}>{this.props.title}</CoolButton>
    )
  }
}
