import React, { useState } from 'react'
// import './header.css'

const DropdownList = () => {
  let [usemenu, setUsemenu] = useState(null)
  const handleEventHover = (menu) => {
    setUsemenu(menu)
  }

  const handleEventOut = () => {
    setUsemenu(null)
  }
  return (
    <>
      <nav className='bg-primary-subtle py-3 px-5'>
        <ul className='list-unstyled p-0 d-flex gap-5 m-0'>
          <li>Home</li>
          <li onMouseUp={() => handleEventHover('services')}>
            Services
            {
              usemenu === "services" && (
                <ul className='list-unstyled p-0 m-0 position-absolute bg-primary text-white p-3 rounded'>
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>SEO Optimization</li>
                </ul>
              )
            }
          </li>
          <li onMouseUp={() => handleEventHover('about')}>
            About us
            {
              usemenu === "about" && (
                <ul className='list-unstyled p-0  m-0 position-absolute bg-primary text-white p-3 rounded'>
                  <li>Our Team</li>
                  <li>Our Story</li>
                  <li>Career</li>
                </ul>
              )
            }
          </li>
          <li>Contact us</li>
        </ul>
      </nav>
    </>
  )
}

export default DropdownList
