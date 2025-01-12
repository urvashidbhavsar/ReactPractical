import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "multiply":
      return state * 2;
    case "reset":
      return 0
    default:
      throw new Error("Unexpected action")
  }
}
const Use_reducerex = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("subtract")}>Subtract</button>
      <button onClick={() => dispatch("multiply")}>Multiply</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <p>{count}</p>
    </>
  )
}

export default Use_reducerex
