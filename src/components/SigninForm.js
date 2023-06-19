import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function SigninForm({setLogedin,formtype}) {
  const [formData,setFormData]=useState({email:"",password:"",formtype:formtype});
  const [visible,setVisible]=useState(false);
  const navigate=useNavigate();

  function changeHandler(event){
    setFormData({...formData,[event.target.name]:event.target.value});
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
    setLogedin(true);
    toast.success("Logged In");
    navigate("/dashboard");
    setFormData({email:"",password:"",formtype:formtype});
  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-20 justify-between '>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className="after:content-['*'] after:text-red-600">Email Address </label>
            <input onChange={changeHandler} value={formData.email} name='email' className='rounded-sm py-1 px-2 text-gray-400 text-xl' placeholder='Enter email address' required id="email" type="email" />
          </div>
          <div className='flex flex-col gap-1 relative '>
            <label htmlFor="password" className="after:content-['*'] after:text-red-600">Password </label>
            <input onChange={changeHandler} value={formData.password} name='password' className='rounded-sm text-xl py-1 px-2 text-gray-400' placeholder='Enter Password' required id="password" type={visible ? "text":"password"} />
            <span onClick={() => setVisible(!visible)} className='absolute bottom-3 text-xl right-2 text-gray-500 '>{visible ? (<AiFillEye></AiFillEye>):(<AiFillEyeInvisible></AiFillEyeInvisible>)}</span>
            <Link to="#">
              <p className='absolute -bottom-[18px] text-xs right-0 text-blue-700'>Forgot Password</p>
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <button type='submit' className='bg-blue-600 rounded-md py-2 mb-3'>Sign In</button>
        </div>
    </form>
  )
}

export default SigninForm