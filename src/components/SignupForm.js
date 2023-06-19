import React, { useEffect, useState } from 'react'
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function SignupForm({setLogedin}) {

  const [student,changeStudent]=useState(true);
  const [instructor,changeInstructor]=useState(false);
  const [visible1,setVisible1]=useState(false);
  const [visible2,setVisible2]=useState(false);
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    student:"",
    instructor:"",
  });
  function handleBtnChange1(){
    changeStudent(true);
    changeInstructor(false);
  }
  function handleBtnChange2(){
    changeStudent(false);
    changeInstructor(true);
  }

  function handleFormData(event){
      setFormData({...formData,[event.target.name]:event.target.value})
  }
  useEffect(()=>{
    setFormData({...formData,student:student,instructor:instructor})
  },[student,instructor]);
  function handleClick(event) { 
    event.preventDefault();
    if(formData.password!=formData.confirmPassword){
      toast.error("Password and Confirm Password must be same");
      return;
    }
    console.log("final data");
    console.log(formData);
    setFormData({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
    });
    setLogedin(true);
    toast.success("Logged In");
    navigate("/dashboard");
    
   }

  return (
  
      <form onSubmit={handleClick} className='flex flex-col gap-2'>
        <div className='bg-white flex fit-content w-fit px-[2px] text-xl py-[2px] gap-2 items-center justify-center rounded-2xl'>
            <button onMouseOver={handleBtnChange1} className={`text-blue-600 ${ student ? "bg-[#02042a]":null} px-3 py-2 rounded-3xl `}>Student </button>
            <button onMouseOver={handleBtnChange2} className={`text-blue-600 ${ instructor ? "bg-[#02042a]":null} px-3 py-2 rounded-3xl `}>Instructor </button>
        </div>
        <div className='flex gap-4'>
          <div className='flex flex-col'>
            <label className="after:content-['*'] after:text-red-600 " htmlFor="">First Name</label>
            <input onChange={handleFormData} required type="text" className='py-1 px-2 text-black' placeholder='Enter first name' value={formData.firstName} name='firstName' />
          </div>
          <div className='flex flex-col'>
            <label className="after:content-['*'] after:text-red-600" htmlFor="">Last Name</label>
            <input onChange={handleFormData} required type="text" className='py-1 px-2 text-black' placeholder='Enter last name' value={formData.lastName} name='lastName' />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className="after:content-['*'] after:text-red-600" htmlFor="">Email Address</label>
          <input onChange={handleFormData} required type="text" className='py-1 px-2 text-black' placeholder='Enter email address' name='email' value={formData.email} />
        </div>
        <div className='flex gap-4'>
          <div className='flex flex-col relative'>
            <label className="after:content-['*'] after:text-red-600" htmlFor="">Create Password</label>
            <input onChange={handleFormData} required className='py-1 px-2 text-black' placeholder='Enter Password' type={visible1 ? "text":"password"} value={formData.password} name='password' />
            <span onClick={() => setVisible1(!visible1)} className='absolute bottom-1 text-xl right-2 text-gray-500 '>{visible1 ? (<AiFillEye></AiFillEye>):(<AiFillEyeInvisible></AiFillEyeInvisible>)}</span>
          </div>
          <div className='flex flex-col relative'>
            <label className="after:content-['*'] after:text-red-600"  htmlFor="">Confirm Password</label>
            <input onChange={handleFormData} className='py-1 px-2 text-black' required placeholder='Confirm Password' type={visible2 ? "text":"password"} value={formData.confirmPassword} name='confirmPassword'  />
            <span onClick={() => setVisible2(!visible2)} className='absolute bottom-1 text-xl right-2 text-gray-500 '>{visible2 ? (<AiFillEye></AiFillEye>):(<AiFillEyeInvisible></AiFillEyeInvisible>)}</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <button type='submit' className='bg-yellow-500 rounded-md p-2 text-black '>Create Account</button>
        </div>
      </form>
  )
}

export default SignupForm