import React from 'react'
import Template from '../components/Template'
import login from "../assets/login.png"

function Signin({setLogedin}) {
  return (
    <div className='min-h-screen'>
      <Template 
      title="Welcome Back" 
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      setLogedin={setLogedin}
      formtype="signin"
      image={login}
      />
    </div>
  )
}

export default Signin