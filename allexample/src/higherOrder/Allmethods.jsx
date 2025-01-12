import React from 'react'

const Allmethods = () => {
  let users = ["Developer", "Trainer", "Management", "Counsellor"]
  let res = users.map(items =>
    <div>{items}</div>
  )

  let search = users.filter(items => items == "Trainer")
  let sear = search.map(items => <div>{items}✅</div>)

  return (
    <>
      <h4>---Using Map method---</h4>
      <div>{res}</div>

      <h4>---Using Filter method---</h4>
      <div>{sear}</div>
    </>
  )
}

export default Allmethods
