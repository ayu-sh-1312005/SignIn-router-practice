// jshint esversion:6
import React from 'react'
import "./App.css"
import { Route,Routes } from 'react-router-dom/dist'
import Navbar from './components/Navbar'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { useState } from 'react'


function App() {
  const [logedin,setLogedin]=useState(false);
  return (
    <div className='bg-[#02042a] text-white max-w-[1080px] mx-auto'>
      <Navbar logedin={logedin} setLogedin={setLogedin} />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/signin" element={<Signin setLogedin={setLogedin} ></Signin>} />
            <Route path="/signup" element={<Signup setLogedin={setLogedin} ></Signup>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          </Routes>
    </div>
  )
}

export default App