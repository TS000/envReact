import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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
