import React from 'react'

const List = (props) => {
  const list = ["Home", "Service", "About", "Contact"]

  return (
    <>
      {
        list.map(items =>
          <li key={items}><a href="">{items}</a></li>
        )
      }
    </>
  )
}

export default List
