import React, { createContext, useContext, useState } from 'react'

const authContext = createContext({ status: null, login: () => { } })

const Auth = () => {
  const auth = useContext(authContext);
  console.log(auth.status);
  return (
    <>
      <p>are you authorised?</p>
      <p>
        {
          auth.status ? <p>Yes</p> : <p>No</p>
        }
      </p>
      <button onClick={auth.login}>Login</button>
    </>
  )

}
const Loginsetup = () => {
  const [loginuser, setLoginuser] = useState(false);
  const login = () => {
    setLoginuser(true)
  }
  return (
    <>
      <authContext.Provider value={{ status: loginuser, login: login }}>
        <Auth />
      </authContext.Provider>
    </>
  )
}

export default Loginsetup
