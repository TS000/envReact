import React from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    height: 100%
    width: 100%
    margin: 0
    font-family: 
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      sans-serif
  }
`

const Wrap = styled.div`
  display: flex
  align-items: center
  justify-content: center

  >p {
    font-size: 200px
    color: black
  }
`

ReactDOM.render(
  <Wrap>
    <p>ツ</p>
  </Wrap>,
  document.getElementById('app')
)

console.log(
  `%c

                    ▄█▀▄
                  ▄██▀▀▀▀▄
                ▄███▀▀▀▀▀▀▀▄
              ▄████▀▀▀▀▀▀▀▀▀▀▄
            ▄█████▀▀▀▀▀▀▀▀▀▀▀▀█▄

              PYRAMIDS, AWESOME
              `,
  'font-family:monospace'
)
