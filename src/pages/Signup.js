import React from 'react'
import Template from '../components/Template'
import signup from "../assets/signup.png"

function Signup({setLogedin}) {
  return (
    <div className='min-h-screen'>
      <Template
      title="Join the millions learning to code with StudyNotion for free" 
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      setLogedin={setLogedin}
      formtype="signup"
      image={signup}
       />
    </div>
  )
}

export default Signup