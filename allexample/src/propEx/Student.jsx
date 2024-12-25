import StudDetails from "./StudDetails";

const Student = () => {
  const name = "Dimpal"

  const handleEvent = () => {
    alert("Student Entry done")
  }
  return (
    <>
      <StudDetails message={name} onclickhandle={handleEvent} />
    </>
  )
}

export default Student