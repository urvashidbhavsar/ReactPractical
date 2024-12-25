const eventEx = () => {
  const handleEvent = () => {
    alert("Hello")
  }

  return (
    <>
      <button onClick={handleEvent}>Click</button>
    </>
  )
}

export default eventEx