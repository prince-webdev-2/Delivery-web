import React, { useState } from 'react'
import { asserts } from '../assets/assets'
import './components.css'

function LoginForm({setShowLogin,showLogi}) {
  const [form,setForm]= useState("Login")
  return (
    <>
        <div className={`fixed w-[80%] sm:w-[50%] lg:w-[30%] left-1/2 transform -translate-x-1/2 z-50 p-6 rounded-xl bg-[white] shadow-2xl`} id={showLogi?"login-div-show" : "login-div-hide"}>
          <form action="">
            <div className='flex items-center justify-between mb-4'>
              <h1 className='text-2xl font-bold text-[black] cursor-default'>{form==="Login"?"Log-in" : "Sign-up"}</h1>
              <img className='cursor-pointer hover:scale-110 duration-300' src={asserts.close} onClick={()=>{setShowLogin(false)}} alt="close-icon" />
            </div>
            <div className='flex flex-col'>
              {
                form==="Sign Up" ? <input className='py-2 px-3 my-[5px] z-50 outline-none border-1 border-[#ccc] rounded-sm' type="text" placeholder='Enter your name' required /> : <></>
              }
              <input className='py-2 px-3 my-[5px] outline-none border-1 border-[#ccc] rounded-sm' type="email" placeholder='Enter your email' required />
              <input className='py-2 px-3 my-[5px] outline-none border-1 border-[#ccc] rounded-sm' type="password" placeholder={`Enter ${form==='Sign Up' ? 'a strong ' : ''}password`} required />
            </div>
            <div className='mt-3'>
              <button className='text-center text-white font-semibold bg-[tomato] w-full py-2 rounded-sm cursor-pointer'>{form==="Sign Up"?"Create Account" : "Login"}</button>
            </div>
            <div className='flex items-center justify-between mb-6'>
              <input className='w-[20px]' type="checkbox" required />
              <p className='ms-1 pt-3'>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <p>{form==="Login"?"Already have" : "Create"} an account? <span className='cursor-pointer text-[tomato] font-semibold' onClick={()=>{setForm(form==="Login"? "Sign Up" : "Login")}}>{form==="Login" ? "Sign Up" : "Login here"}</span></p>
          </form>
        </div>
    </>
  )
}

export default LoginForm