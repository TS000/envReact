import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Carousel from './components/reusable/Carousel'
import Button from './components/reusable/Button'
import slideData, { slides1, slides2 } from './data/slideData'

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
    font-size: 100px;
    color: black;
  }
`

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Wrap>
          <p>ツ</p>
          <h4>yay</h4>
          <Carousel
            slides={unWrappedData}
            speed={false}
            size={450}
            multi={false}
          />
        </Wrap>
      </div>
    )
  }
}
