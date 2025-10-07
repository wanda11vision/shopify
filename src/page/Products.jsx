import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom';

function Products({ cart, setCart, setSearch }) {


  const decreaseQuantity = (itemsss) => {
    setCart((prevCart) =>
      prevCart.map((it) =>
        it.name === itemsss.name
          ? { ...it, quantity: it.quantity - 1 }
          : it
      )
        .filter((it) => it.quantity > 0)
    );
  };

  const increaseQuantity = (itemsss) => {
    setCart((prevCart) =>
      prevCart.map((it) =>
        it.name === itemsss.name
          ? { ...it, quantity: it.quantity + 1 }
          : it
      )
    );
  };

  const removeItem = (itemsss) => {
    setCart((prevCart) =>
      prevCart.filter((it) => it.name !== itemsss.name)
    );
  };

  return (
    <div className='h-screen'>
      <Nav cart={cart} setSearch={setSearch} />
      <div className='h-[15%] w-[100%] '></div>

      <div className='itemdiv h-auto  w-[100%] flex flex-col items-center justify-center'>
        <div className='itemdiv2 h-auto w-[85%]   flex justify-around flex-wrap '>
          {
            cart.map((p, i) => (

              <div key={i} className='card border h-[48vh] w-[22%] m-3 flex flex-col  items-start justify-around'>

                <div className='cardimg h-[65%] w-full flex items-center justify-center'>
                  <img src={p.photo} alt={p.title} 
                  className="h-[80%] w-[60%]  transition-transform duration-500 hover:scale-125" />
                </div>

                <div className='cardtxt h-[35%]  w-full flex border' >

                  <div className='w-[80%] px-3 text-left  flex justify-around flex-col'>
                    <NavLink to={`/product/${p.name}`} ><h1 className="font-semibold hover:underline text-black text-[15px]">
                      {p.name}
                    </h1></NavLink>
                    <h1 className="text-[8px]">{p.rating}</h1>
                    <h1 className='text-[18px] text-blue-500'>{p.rate}</h1>

                    <div className='border w-[80%] flex justify-around '>
                      <button onClick={() => decreaseQuantity(p)}>-</button>

                      <h1>{p.quantity}</h1>
                      <button onClick={() => increaseQuantity(p)}>+</button>
                      <button onClick={() => removeItem(p)}>❌</button>
                    </div>
                  </div>

                  <div className=' w-[30%] flex items-center justify-center'>
                    <NavLink to={'/login'}> <button className='bg-gray-200 text-black-700 rounded p-2 text-xs'>Buy Now</button></NavLink>
                  </div>

                </div>

              </div>


            ))
          }

        </div>
      </div>

      
       <div class=" h-[10vh] bg-blue-500 text-white p-4 text-center mt-auto">
        <div>
          © Copyright | All Rights Reserved
        </div>

        <div>
          <a href='https://wanda11vision.github.io/portfolio/' className=" hover:underline hover:font-bold hover:opacity-100" >MY PORTFOLIO😎</a>
        </div>
      </div>
      
    </div>
  )
}

export default Products
