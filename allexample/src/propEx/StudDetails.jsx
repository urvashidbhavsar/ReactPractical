/* eslint-disable react/prop-types */
const StudDetails = ({ message, onclickhandle }) => {
  return (
    <>
      <button onClick={onclickhandle}>Click</button>
      <p>{message}</p>
    </>
  )
}

export default StudDetails