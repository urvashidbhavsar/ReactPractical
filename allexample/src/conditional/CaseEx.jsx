import { useState } from "react"

const CaseEx = () => {
  const [status, setStatus] = useState('admin')
  const Select = () => {
    switch (status) {
      case 'admin':
        return <button onClick={() => setStatus('user')}>Login</button>;
      case 'user':
        return <div>Welcome</div>
      default:
        return null;
    }
  }
  return (
    <>
      <Select />
    </>
  )
}
export default CaseEx