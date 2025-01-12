import React, { useState } from 'react'

const UseContextex = () => {
  const [user, setUser] = useState("Urvashi")
  return (
    <>
      <p>{`Hello ${user}!`}</p>
      <Comp1 user={user}></Comp1>
    </>
  )
}
const Comp1 = ({ user }) => {
  return (
    <>
      <div>Component 1</div>
      <Comp2 user={user}></Comp2>
    </>
  )
}
const Comp2 = ({ user }) => {
  return (
    <>
      <div>Component 2</div>
      <p>{`Hello ${user} again!!`}</p>
    </>
  )
}

export default UseContextex
