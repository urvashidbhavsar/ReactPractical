/* eslint-disable react/prop-types */

const User = (props) => {
  return <h2>{props.username}</h2>
}

const PropEx1 = () => {
  return (
    <>
      <User username="Tops" />
    </>
  )
}

export default PropEx1