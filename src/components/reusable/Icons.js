import React from 'react'
import styled from 'styled-components'

//icons for the site
const SortIcon = require('../../dist/icons/filter.svg')
const AlertIcon = require('../../dist/icons/alert.svg')

const IconWrap = styled.span`
>img{
  width: 10px
  height: auto
  margin-left: 5px;
}
`

export class IconSort extends React.Component {
  render() {
    return (
      <IconWrap>
        <img src={SortIcon} />
      </IconWrap>
    )
  }
}

export class IconAlert extends React.Component {
  render() {
    return (
      <IconWrap>
        <img src={AlertIcon} />
      </IconWrap>
    )
  }
}
