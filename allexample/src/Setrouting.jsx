import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Setrouting = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </>
  )
}

export default Setrouting
