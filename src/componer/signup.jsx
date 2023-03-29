import React, { useEffect, useRef, useState } from 'react'
import trees from '../assets/trees.jpg'
import Logout from './logout.jsx';


function Signup() {




const username=useRef()
const password=useRef()
const email=useRef()    
const localSignup=localStorage.getItem("signup")
const [showHome,setShowHome]=useState(false)
useEffect(()=>{
    if(localSignup){
        setShowHome(true)
    }
})
const handleClick=()=>{
if(username.current.value&&password.current.value&&email.current.value){
    {
        localStorage.setItem("username",username.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("signup",email.current.value)
        alert("Account created successfully!!")
        window.location.reload();
    }
}
}
  return (
    <div className='w-full h-screen flex'>
    {showHome?<Logout/>:
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                <div className='w-full h-[550px] hidden md:block'>
                    <img className='w-full h-full' src={trees} alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around'>
                    <form>
                        <h2 className=' text-4xl font-bold text-center mb-8'>Tạo Tài Khoản</h2>
                        <div className='flex flex-col'>
                            <input className='border p-2 ' type="text" placeholder='Username' ref={username}/>
                            <input className='border p-2' type="password" placeholder='Password' ref={password}/>
                            <input className='border p-2' type="email" placeholder='Email' ref={email} />
                        </div>
                        <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500' onClick={handleClick}>Sign Up</button>
                    </form>
                </div>
            </div>
    }
    </div>
  )
}

export default Signup