import React from 'react'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
import frame from "../assets/frame.png"

function Template({title,desc1,desc2,image,formtype,setLogedin}) {
  return (
    <div className='flex justify-around mt-10 px-4 gap-4'>
        <div className='flex flex-col gap-4 justify-center flex-[0.6]'>
            <div className='flex flex-col'>
                <h1 className='text-3xl'>{title}</h1>
                <p>{desc1}</p>
                <p className='text-blue-600'>{desc2}</p>
            </div>
            <div className='w-full flex flex-col'>
                {formtype==="signin" ?
                (<SigninForm setLogedin={setLogedin} formtype={formtype} />)
                :
                (<SignupForm setLogedin={setLogedin} formtype={formtype} />)
                }
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row items-center justify-center'>
                        <div className='bg-white flex-1 h-[1px]'></div>
                        <span className='mx-2 text-lg'>or</span>
                        <div className='bg-white flex-1 h-[1px]'></div>
                    </div>
                    <button type='submit' className='bg-white flex items-center justify-center text-blue-600 rounded-md py-2 gap-1  '>
                        <span><img height={20} loading='lazy' width={20} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /></span>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
        <div className='relative'>
            <img height={500} width={500} src={frame} alt="" />
            <img className='absolute top-[10px] right-[10px] object-contain' height={500} width={500} src={image} alt="" />
        </div>
    </div>
  )
}

export default Template