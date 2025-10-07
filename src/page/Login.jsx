import React from 'react'
import Nav from './Nav'

function Login({cart,setSearch}) {
  return (
    <div className='h-screen bg-gray-50'>
       <Nav  cart={cart} setSearch={setSearch}/>
      <div className='h-[10%] w-[100%] '></div>
      <div className='flex flex-col items-center justify-center h-96'>
        <h1 className='text-4xl font-bold text-blue-600'>login</h1>
      </div>
    </div>
  )
}

export default Login
