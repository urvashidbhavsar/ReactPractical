/* eslint-disable react/prop-types */
const ternary = () => {
  const Person = ({ name, graduate }) => {
    return (graduate) ? <div>{name} ✅</div> : <div>{name} ❌</div>
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

export default ternary