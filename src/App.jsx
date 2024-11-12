import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/gdg.svg'
import BadgeCreator from './components/BadgeCreator'
import BadgeTry from './components/BadgeTry'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      {/* <BadgeCreator/> */}
      {/* // <BadgeTry /> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
