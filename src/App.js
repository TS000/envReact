import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Carousel from '@/components/reusable/Carousel'
import slideData, { slides1, slides2 } from './data/slideData'
import Button from '@/components/reusable/Button'

const unWrappedData = slideData

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      sans-serif;
  }
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  flex-wrap: wrap;

  > p {
    font-size: 200px;
    color: black;
  }
`

const size2 = 250

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Wrap>
          <p>ツ</p>
          <h4>yay</h4>
          <Button title="button" />
          <Carousel
            slides={unWrappedData}
            speed={false}
            size={size2}
            multi={true}
          />
        </Wrap>
      </div>
    )
  }
}
