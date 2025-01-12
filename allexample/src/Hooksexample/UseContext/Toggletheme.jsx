import React, { createContext, useState } from 'react'

export const themecontext = createContext()
const Toggletheme = ({ child }) => {
  const [theme, setTheme] = useState("light")
  return (
    <>

    </>
  )
}

export default Toggletheme
