import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({ cart,setSearch  }) {


    const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

    return (
        <div className='h-[10%] bg-gray-50 border-2 fixed z-10 w-[100%] flex items-center justify-around'>
            <ul>
                <NavLink to={'/'}><li className='text-4xl font-bold text-orange-500 '>Shopify</li></NavLink>
            </ul>

            <input className='h-[50%] w-[30%] border p-2 ' placeholder='search here....'
                onChange={(e) => setSearch(e.target.value)} ></input>


            <ul className='h-[70%] w-[30%] flex items-center justify-around'>
                <NavLink to={'/'}><li>Home</li></NavLink>
                <NavLink to={'/products'}><li>items</li></NavLink>
                <NavLink to={"/products"}><li>🛒<sup>{totalItems > 0 && <span className='bg-red-500 p-1 rounded-xl text-white text-[12px] '>{totalItems}</span>}</sup></li></NavLink>
                <NavLink to={'/login'}><li>Login</li></NavLink>

            </ul>
        </div>
    )
}

export default Nav
