import React from 'react'
import Nav from './Nav'

function Login({ cart, setSearch }) {
  return (
    <div className='h-screen bg-gray-50'>
      <Nav cart={cart} setSearch={setSearch} />


{/* bg-[url(/bglogin.jpeg)] bg-cover bg-center */}

      <div className='h-[100%] bg-black  w-full flex items-center justify-center rounded-md' >

        <div className='ud11 h-[45%] md:h-[65%] w-[60%] md:w-[25%] flex items-center  flex-col justify-around rounded-xl border-[3px] border-white   '>
          <h1 className='text-[25px] font-mono text-white '>LOGIN</h1>
          <div className='font-mono text-white h-[50%] w-[80%] flex items-start justify-between flex-col '>
            <h3>Username</h3>
            <input placeholder='Enter Username' className='w-[90%] text-xs bg-slate-100 text-black h-[20%] rounded-md pl-2' type='text' />
            <h3>Password</h3>
            <input type='password' placeholder='Enter password' className='h-[20%] text-xs text-black bg-slate-100 w-[90%] rounded-md pl-2 ' />
          </div>
          
          <button className=" md:p-4 p-1.5 w-[50%] md:w-[40%] bg-blue-500 bg-gradient-to-r from-pink-500 to-purple-600 text-white  rounded-lg text- font-bold transition-transform transform hover:scale-110 hover:bg-pink-600">
            Sign up !
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login
