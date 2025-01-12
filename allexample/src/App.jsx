import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UsestateEx from './Hooksexample/UsestateEx'
import Setrouting from './Setrouting'
import About from './Pages/About';
import Contact from './Pages/Contact';
import UseEffectex from './Hooksexample/UseEffectex';
import Calculation from './Hooksexample/Calculation';
import UserList from './Hooksexample/UserList';
import UserefEx from './Hooksexample/UserefEx';
import Videoplay from './Hooksexample/Videoplay';
import UseContextex from './Hooksexample/UseContextex';
import Themesetup from './Hooksexample/UseContext/Themesetup';
import Loginsetup from './Hooksexample/UseContext/Loginsetup';
import Use_reducerex from './Hooksexample/UseReducer/Use_reducerex';
import Counter from './Hooksexample/UseCallback/Counter';
import FetchApi from './Hooksexample/customhooks/FetchApi';
import FetchApihooks from './Hooksexample/customhooks/FetchApihooks';
// import CaseEx from './conditional/CaseEx'
// import Allmethods from './higherOrder/Allmethods'
// import Logicalex from './conditional/Logicalex'
// import Ifstatement from './conditional/Ifstatement'
// import ProptypeEx from './ProptypeEx'
// import Stateex from './stateexample/Stateex1'
// import Stateex2 from './stateexample/Stateex2'
// import Logo from './propEx/Logo'
// import Classex from './components/classex'
// import Disimage from './Disimage'
// import Propex from './propEx/PropEx1'
// import Person from './propEx/person'
// import Student from './propEx/Student'
// import EventEx from './eventEx'
// import Ternary from './conditional/ternary'

function App() {
  return (
    <>
      {/* <Classex /> */}
      {/* <Disimage /> */}
      {/* <Propex /> */}
      {/* <Student /> */}
      {/* <Logo title="Tops" /> */}
      {/* <ProptypeEx numvalue={444} /> */}
      {/* <Stateex /> */}
      {/* <Stateex2 /> */}
      {/* <EventEx /> */}
      {/* <Ifstatement /> */}
      {/* <Logicalex /> */}
      {/* <Ternary /> */}
      {/* <CaseEx /> */}
      {/* <Allmethods /> */}
      {/* <Person /> */}

      {/* <Router>
        <Setrouting />
        <Routes>
          <Route path="/" element="" />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}

      {/* <UsestateEx /> */}
      {/* <UseEffectex /> */}
      {/* <Calculation /> */}
      {/* <UserList /> */}
      {/* <UserefEx /> */}
      {/* <Videoplay /> */}
      {/* <UseContextex /> */}
      {/* <Themesetup /> */}
      {/* <Loginsetup /> */}
      {/* <Use_reducerex /> */}
      {/* <Counter /> */}
      {/* <FetchApi /> */}
      <FetchApihooks />
    </>
  )
}

export default App
