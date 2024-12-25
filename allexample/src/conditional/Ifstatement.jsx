/* eslint-disable react/prop-types */
const Ifstatement = () => {
  const Person = ({ name, graduate }) => {
    if (graduate) {
      return <div>{name} ✅</div>
    } else {
      return <div>{name} ❌</div>
    }
  }
  return (
    <>
      <Person name="Priya" graduate={true} />
      <Person name="Anand" graduate={false} />
      <Person name="Tina" graduate={false} />
      <Person name="Roshni" graduate={true} />
      <Person name="Dipesh" graduate={true} />
    </>
  )
}

export default Ifstatement