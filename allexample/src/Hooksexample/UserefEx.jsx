import React, { useEffect, useRef, useState } from 'react'

const UserefEx = () => {
  const [inputval, setInputval] = useState("");
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })

  const checktype = (e) => {
    setInputval(e.target.value)
  }
  return (
    <>
      <input type="text" value={inputval} onChange={checktype} />
      <p>{count.current}</p>
    </>
  )
}

export default UserefEx
