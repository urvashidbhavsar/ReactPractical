import React from 'react'
import { useState } from 'react'

const UsestateEx = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>

      <p>{count}</p>
    </>
  )
}

export default UsestateEx
