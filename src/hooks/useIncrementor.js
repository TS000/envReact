import * as React from 'react'
import useInterval from './useInterval'

function useIncrementor({
  total = 0,
  enabled = false,
  speed = 10,
  loop = true,
  multi = true
}) {
  const [offset, setOffset] = React.useState(0)
  const [items, setItems] = React.useState([])

  function incrementOffset() {
    if (multi === true) {
      if (offset === total - 4) {
        setOffset(loop ? 0 : offset)
      } else {
        setOffset(offset + 1)
      }
      return
    }
    if (offset === total - 1) {
      setOffset(loop ? 0 : offset)
    } else {
      setOffset(offset + 1)
      return
    }
  }

  function addItem(ref) {
    setItems([...items, ref])
  }

  const loaded = true

  useInterval(() => {
    if (loaded && enabled && offset < total) {
      incrementOffset()
    }
  }, speed)

  return { offset, addItem }
}

export default useIncrementor
