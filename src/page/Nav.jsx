import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({ cart,setSearch  }) {


    const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

    return (
        <div className='h-[10%] bg-gray-50 border-2 fixed z-10 w-[100%] flex items-center justify-around'>
            <ul className='w-[20%]'>
                <NavLink to={'/'}><li className='text-[20px] md:text-4xl font-bold text-orange-500 '>Shopify</li></NavLink>
            </ul>

            <input className='h-[30%]  md:h-[70%] w-[40%] md:w-[30%] text-[10px] border md:border-[3px] md:rounded border-blue-400 md:border-blue-400 p-2  ' placeholder='search for a product...'
                onChange={(e) => setSearch(e.target.value)} ></input>


            <ul className='h-[70%] w-[30%]  md:w-[30%] text-[10px] md:text-[15px] flex items-center justify-around'>
                <NavLink to={'/'}><li>Home</li></NavLink>
                {/* <NavLink to={'/Categories'}><li>Items</li></NavLink> */}
                <NavLink to={"/products"}><li>🛒<sup>{totalItems > 0 && <span className='bg-red-500 text-[8px] p-0.5 rounded-xl text-white md:text-[12px] '>{totalItems}</span>}</sup></li></NavLink>
                <NavLink to={'/login'}><li>Login</li></NavLink>

            </ul>
        </div>
    )
}

export default Nav
