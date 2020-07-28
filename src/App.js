import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'


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

  >p {
    font-size: 200px;
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
        </Wrap>
      </div>
    )
  }
}
