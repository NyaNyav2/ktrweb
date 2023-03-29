import React, { useRef } from 'react'
import trees from '../assets/trees.jpg'
import {Link} from 'react-router-dom'
import Logout from './logout'

function Login() { 


  const username=useRef()
  const password=useRef()
  const getUsername=localStorage.getItem("username")
  const getUsernameData=localStorage.getItem("usernameData")
  const getPassword=localStorage.getItem("password")
  const getEmail=localStorage.getItem('email')
  const signup=localStorage.getItem("signup")
  const handeleSubmit=()=>{
        if(username.current.value==getUsername&&password.current.value==getPassword){
            localStorage.setItem("signup",getEmail)
            
        }
        else if(username.current.value=="kin123"&&password.current.value=="12345"){
            localStorage.setItem("signup",'kin@gmail.com')
            localStorage.setItem("usernameData","kin123")
        } 
        else{
            alert('Sai mật khẩu or tài khoản');
        }
        
       
  }



  return (
    <div className='w-full h-screen flex'>
        {
           getUsernameData &&signup?<Logout/>:
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
            <img className='w-full h-full' src={trees} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
            <form onSubmit={handeleSubmit}>
                <h2 className='text-4xl font-bold text-center mb-8'>Kiểm Tra Giữa Kì </h2>
                <div>
                    <input className='border p-2 mr-2' type="text" placeholder='Username' ref={username} />
                    <input className='border p-2' type="password" placeholder='Password' ref={password} />
                </div>
                <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>
                <p className='text-center'>Forgot Username or Password?</p>
            </form>
          <Link to='/signup' className='text-center'>Sign Up</Link>
        </div>
    </div>
        }
    </div>
  )
}

export default Login