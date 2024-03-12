import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import SignUp from './components/SignUp.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path='/signUP' element={<SignUp />}/>
    </Routes>
    </>
  )
}

export default App
