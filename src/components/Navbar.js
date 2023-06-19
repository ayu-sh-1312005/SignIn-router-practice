/* jshint esversion:6 */
import React, { useState } from 'react'
import logo from "../assets/Logo.svg"
import { Link, useNavigate } from 'react-router-dom/dist'
import { logDOM } from '@testing-library/react';
import { toast } from 'react-hot-toast';

function Navbar({logedin,setLogedin}) {


  return (
    <div className='flex items-center justify-between mx-auto mb-8 max-w-[1080px] w-full bg-[#02042a] text-white p-5'>
        <Link to="/" className='flex items-center'>
            <img src={logo} width={160} height={32} alt="" loading='lazy' />
        </Link>
        <ul className='flex items-center text-lg gap-3 justify-self-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contacts</Link></li>
        </ul>
        <div className='flex items-center text-lg gap-3 mx-2'>
          {!logedin &&
          <Link to="/signin">
            <button className='bg-blue-700 py-1 px-2 rounded-md'>Signin</button>
          </Link>
          }
          {logedin &&
          <Link to="/dashboard">
            <button className='bg-blue-700 py-1 px-2 rounded-md'>Dashboard</button>
          </Link>
          }
          {!logedin &&
          <Link to="/signup">
            <button className='bg-white py-1 px-2 rounded-md text-blue-700'>Signup</button>
          </Link>
          }
          {logedin &&
          <Link to="/">
            <button onClick={() => {setLogedin(!logedin);toast.success("Logged Out");}} className='bg-white py-1 px-2 rounded-md text-blue-700'>Logout</button>
          </Link>
          }
        </div>
    </div>
  )
}

export default Navbar