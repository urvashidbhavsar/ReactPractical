import { useState } from "react"

const Logicalex = () => {
  const [logged, islogged] = useState(false)
  return (
    <>
      <button onClick={() => islogged(!logged)}>Click</button>
      {logged && <h1>Welcome</h1>}
    </>
  )
}

export default Logicalex