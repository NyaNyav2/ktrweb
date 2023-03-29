import React from 'react'
import {Link} from 'react-router-dom'
import trees from '../assets/trees.jpg'

 function Logout() {


  const handelClick=()=>{
    localStorage.removeItem("signup");
   
  }

  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={trees} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>Đã Đăng Nhập</h2>
                
                    <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500' onClick={handelClick}><Link to="/login">Sign Out</Link></button>
                  
                </form>
              
            </div>
        </div>
    </div>
  )
}
export default Logout