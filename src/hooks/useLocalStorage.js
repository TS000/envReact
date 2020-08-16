import React from 'react'

const getStateFromLocalStorage = (defaultValue, key) => {
  const storage = localStorage.getItem(key)
  if (storage) return JSON.parse(storage).value
  return defaultValue
}

const useLocalStorage = (defaultValue, key) => {
  const initialValue = getStateFromLocalStorage(defaultValue, key)
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage

// const [count, setCount] = useLocalStorage(0, 'count');
