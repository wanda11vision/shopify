// ✅ Full Redux-integrated version of your original Products.jsx

import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

// 🟢 Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrement } from '../features/cartSlice'; 

function Products() {

  // 🟢 Access Redux store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // 🟢 Increase quantity
  const increaseQuantity = (item) => {
    dispatch(addToCart(item)); // same action used for increment
  };

  // 🟢 Decrease quantity
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decrement(item)); // custom action added in cartSlice
    } else {
      dispatch(removeFromCart(item));
    }
  };

  // 🟢 Remove item
  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  // 💰 Calculate total dynamically
  const total = cart
    .reduce(
      (acc, item) => acc + parseFloat(item.rate.replace('$', '')) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🟢 Nav Component */}
      <Nav />

      <div className="h-[13vh]"></div>

      <div className="itemdiv flex flex-col md:flex-row w-[90%] mx-auto">

        {/* 🟢 Left Sidebar */}
        <div className="md:w-[30%]">
          <div className="px-2 text-center container grid gap-2 grid-cols-2 mx-auto">
            <div className="flex items-center justify-center bg-gray-100 py-4 font-karla">
              <div>
                <h2 className="font-medium text-sm">🚚 Free Delivery</h2>
                <p className="text-gray-600 text-xs">Orders from all items</p>
              </div>
            </div>

            <div className="flex bg-gray-100 items-center justify-center py-4 font-karla">
              <div>
                <h2 className="font-medium text-sm">💰 Return & Refund</h2>
                <p className="text-gray-600 text-xs">Money back guarantee</p>
              </div>
            </div>

            <div className="flex bg-gray-100 items-center justify-center py-4 font-karla">
              <div>
                <h2 className="font-medium text-sm">🛍️ Member Discount</h2>
                <p className="text-gray-600 text-xs">On order over $99</p>
              </div>
            </div>

            <div className="flex bg-gray-100 items-center justify-center font-karla">
              <div>
                <h2 className="font-medium text-sm">📞 Support 24/7</h2>
                <p className="text-gray-600 text-xs">Contact us 24 hours a day</p>
              </div>
            </div>
          </div>

          {/* 🟢 Cart Summary */}
          <div className="border p-4 m-2">
            <input className="border w-full m-1 p-1" placeholder="Enter your Email" />
            <input
              className="border w-full m-1 p-1"
              placeholder="Enter Mobile Number"
              type="number"
            />
            <input className="border w-full m-1 p-1" placeholder="Enter Your Name" />
            <input className="border w-full m-1 p-1" placeholder="Enter full Address" />
            <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
            <div className="flex justify-between">
              <h1>Subtotal</h1>
              <h1>${total}</h1>
            </div>
            <div className="flex justify-between text-green-600">
              <h1>Discount (10%)</h1>
              <span>- ${(total * 0.1).toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-blue-600">
              <span>Total</span>
              <span>${(total * 0.9).toFixed(2)}</span>
            </div>
            <NavLink to="/login">
              <button className="text-[15px] p-3 w-full mt-4 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg md:text-lg font-bold transition-transform transform hover:scale-105">
                Proceed to Checkout
              </button>
            </NavLink>
          </div>
        </div>

        {/* 🟢 Products Grid */}
        <div className="itemdiv2 w-full flex flex-wrap justify-center md:w-[65%]">
          {cart.length === 0 ? (
            <h2 className="text-green-500 text-center font-mono md:text-3xl">Your cart is empty 😢</h2>
          ) : (
            cart.map((item) => (
              <div
                key={item.name}
                className="card border h-[30vh] md:h-[45vh] w-[42%] md:w-[30%] m-3 flex flex-col items-start justify-around"
              >
                <div className="cardimg h-[65%] w-full flex items-center justify-center">
                  <img
                    className="h-[80%] w-[60%] transition-transform duration-500 hover:scale-125"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>

                <div className="cardtxt h-[35%] border w-full px-3 text-left flex flex-col justify-around">
                  <NavLink to={`/product/${item.name}`}>
                    <h1 className="font-semibold hover:underline text-black text-[9px] md:text-[15px]">
                      {item.name}
                    </h1>
                  </NavLink>

                  <h1 className="text-[8px] md:text-[12px]">{item.rating}</h1>

                  <h1 className="text-[12px] md:text-[18px] text-blue-500">
                    {item.rate}{" "}
                    <span className="text-gray-600 text-[9px] md:text-[13px]">
                      <del>{item.rate2}</del>
                    </span>
                  </h1>

                  <div className="w-[80%] flex justify-around items-center">
                    {/* 🟢 Decrement */}
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="text-[8px] md:text-[22px]"
                    >
                      <b>-</b>
                    </button>

                    <h1 className="text-[12px] md:text-[15px]">{item.quantity}</h1>

                    {/* 🟢 Increment */}
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="text-[8px] md:text-[22px]"
                    >
                      <b>+</b>
                    </button>

                    {/* 🟢 Remove */}
                    <button
                      onClick={() => removeItem(item)}
                      className="text-[8px] md:text-[15px]"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;


// import React from 'react';
// import Nav from './Nav';
// import { NavLink } from 'react-router-dom';

// function Products({ cart, setCart, setSearch }) {

//   const decreaseQuantity = (item) => {
//     setCart(prevCart =>
//       prevCart
//         .map(it => it.name === item.name ? { ...it, quantity: it.quantity - 1 } : it)
//         .filter(it => it.quantity > 0)
//     );
//   };

//   const increaseQuantity = (item) => {
//     setCart(prevCart =>
//       prevCart.map(it => it.name === item.name ? { ...it, quantity: it.quantity + 1 } : it)
//     );
//   };

//   const removeItem = (item) => {
//     setCart(prevCart => prevCart.filter(it => it.name !== item.name));
//   };

//   // 💰 Calculate total dynamically
//   const total = cart
//     .reduce((acc, item) => acc + parseFloat(item.rate.replace('$', '')) * item.quantity, 0)
//     .toFixed(2);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Nav cart={cart} setSearch={setSearch} />

//       <div className="h-[13vh]"></div>

//       <div className="itemdiv flex flex-col md:flex-row w-[90%] mx-auto">

//         {/* Left Sidebar */}
//         <div className="md:w-[30%]">
//           <div className="px-2 text-center container grid gap-2 grid-cols-2 mx-auto">
//             <div className="flex items-center justify-center bg-gray-100 py-4 font-karla">
//               <div>
//                 <h2 className="font-medium text-sm">🚚 Free Delivery</h2>
//                 <p className="text-gray-600 text-xs">Orders from all items</p>
//               </div>
//             </div>

//             <div className="flex bg-gray-100 items-center justify-center py-4 font-karla">
//               <div>
//                 <h2 className="font-medium text-sm">💰 Return & Refund</h2>
//                 <p className="text-gray-600 text-xs">Money back guarantee</p>
//               </div>
//             </div>

//             <div className="flex bg-gray-100 items-center justify-center py-4 font-karla">
//               <div>
//                 <h2 className="font-medium text-sm">🛍️ Member Discount</h2>
//                 <p className="text-gray-600 text-xs">On order over $99</p>
//               </div>
//             </div>

//             <div className="flex bg-gray-100 items-center justify-center font-karla">
//               <div>
//                 <h2 className="font-medium text-sm">📞 Support 24/7</h2>
//                 <p className="text-gray-600 text-xs">Contact us 24 hours a day</p>
//               </div>
//             </div>
//           </div>

//           {/* Cart Summary */}
//           <div className="border p-4 m-2">
//             <input className='border w-full m-1 p-1' placeholder='Enter your Email'></input>
//             <input className='border w-full m-1 p-1' placeholder='Enter Mobile Number' type='number'></input>
//             <input className='border w-full m-1 p-1' placeholder='Enter Your Name'></input>
//             <input className='border w-full m-1 p-1' placeholder='Enter full Address'></input>
//             <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
//             <div className="flex justify-between">
//               <h1>Subtotal</h1>
//               <h1>${total}</h1>
//             </div>
//             <div className="flex justify-between text-green-600">
//               <h1>Discount (10%)</h1>
//               <span>- ${(total * 0.1).toFixed(2)}</span>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between font-bold text-blue-600">
//               <span>Total</span>
//               <span>${(total * 0.9).toFixed(2)}</span>
//             </div>
//             <NavLink to="/login">
//               <button className="text-[15px] p-3 w-full mt-4 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg md:text-lg font-bold transition-transform transform hover:scale-105">
//                 Proceed to Checkout
//               </button>
//             </NavLink>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="itemdiv2 w-full flex flex-wrap justify-center md:w-[65%]">
//           {cart.map(item => (
//             <div key={item.name} className="card border h-[30vh] md:h-[45vh] w-[42%] md:w-[30%] m-3 flex flex-col items-start justify-around">
//               <div className="cardimg h-[65%] w-full flex items-center justify-center">
//                 <img
//                   className="h-[80%] w-[60%] transition-transform duration-500 hover:scale-125"
//                   src={item.photo}
//                   alt={item.name}
//                 />
//               </div>

//               <div className="cardtxt h-[35%] border w-full px-3 text-left flex flex-col justify-around">

//                 <NavLink to={`/product/${item.name}`}>
//                   <h1 className="font-semibold hover:underline text-black text-[9px] md:text-[15px]">{item.name}</h1>
//                 </NavLink>

//                 <h1 className="text-[8px] md:text-[12px]">{item.rating}</h1>

//                 <h1 className="text-[12px] md:text-[18px] text-blue-500">
//                   {item.rate} <span className="text-gray-600 text-[9px] md:text-[13px]"><del>{item.rate2}</del></span>
//                 </h1>

//                 <div className="w-[80%] flex justify-around items-center">
//                   <button onClick={() => decreaseQuantity(item)} className="text-[8px] md:text-[22px]"><b>-</b></button>
//                   <h1 className="text-[12px] md:text-[15px]">{item.quantity}</h1>
//                   <button onClick={() => increaseQuantity(item)} className="text-[8px] md:text-[22px]"><b>+</b></button>
//                   <button onClick={() => removeItem(item)} className="text-[8px] md:text-[15px]">❌</button>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Products;






















// import React from 'react'
// import Nav from './Nav'
// import { NavLink } from 'react-router-dom'

// function Products({ cart, setCart, setSearch }) {

//   const decreaseQuantity = (itemsss) => {
//     setCart((prevCart) =>
//       prevCart.map((it) =>
//         it.name === itemsss.name
//           ? { ...it, quantity: it.quantity - 1 }
//           : it
//       ).filter((it) => it.quantity > 0)
//     )
//   }

//   const increaseQuantity = (itemsss) => {
//     setCart((prevCart) =>
//       prevCart.map((it) =>
//         it.name === itemsss.name
//           ? { ...it, quantity: it.quantity + 1 }
//           : it
//       )
//     )
//   }

//   const removeItem = (itemsss) => {
//     setCart((prevCart) =>
//       prevCart.filter((it) => it.name !== itemsss.name)
//     )
//   }

//   // 💰 Calculate total amount dynamically
//   const total = cart.reduce((acc, item) => {
//     const price = parseFloat(item.rate.replace('$', ''))
//     return acc + price * item.quantity
//   }, 0).toFixed(2)

//   return (
//     <div className='min-h-screen flex flex-col'>
//       <Nav cart={cart} setSearch={setSearch} />
//       <div className='h-[10vh]'></div>

//       {/* 🧱 Main Section */}
//       <div className='flex flex-col lg:flex-row justify-between items-start w-full px-4'>

//         {/* 🛒 Left Side — Cart Items */}
//         <div className='w-full lg:w-[70%] flex flex-wrap justify-around'>
//           {
//             cart.map((p, i) => (
//               <div key={i} className='card border h-[48vh] w-[90%] sm:w-[45%] lg:w-[22%] m-3 flex flex-col items-start justify-around'>
//                 <div className='cardimg h-[65%] w-full flex items-center justify-center'>
//                   <img src={p.photo} alt={p.title}
//                     className="h-[80%] w-[60%] transition-transform duration-500 hover:scale-125" />
//                 </div>

//                 <div className='cardtxt h-[35%] w-full flex border'>
//                   <div className='w-[80%] px-3 text-left flex justify-around flex-col'>
//                     <NavLink  to={`/product/${p.name}` } >
//                       <h1 className="font-semibold hover:underline text-black text-[15px]">
//                         {p.name}
//                       </h1>
//                     </NavLink>
//                     <h1 className="text-[12px]">{p.rating}</h1>
//                     <h1 className='text-[18px] text-blue-500'>{p.rate}</h1>

//                     <div className='border w-[80%] flex justify-around items-center'>
//                       <button onClick={() => decreaseQuantity(p)}><b>-</b></button>
//                       <h1>{p.quantity}</h1>
//                       <button onClick={() => increaseQuantity(p)}><b>+</b></button>
//                       <button onClick={() => removeItem(p)}>❌</button>
//                     </div>
//                   </div>

//                   <div className='w-[30%] flex items-center justify-center'>
//                     <NavLink to={'/login'}>
//                       <button className='bg-gray-200 hover:bg-pink-600 hover:text-white text-black rounded p-2 text-xs'>
//                         Buy Now
//                       </button>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>

//         {/* 💵 Right Side — Cart Summary */}
//         <div className='w-full lg:w-[25%] flex flex-col items-center justify-start mt-6 lg:mt-0'>
//           <div className='checkout border rounded-lg p-4 w-[90%] text-center bg-gray-50 shadow'>
//             <h1 className='text-lg font-semibold mb-3'>🧾 Cart Summary</h1>
//             <h2 className='text-xl font-bold text-green-600 mb-3'>Total: ${total}</h2>
//             <button className='bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded'>
//               Proceed to Checkout
//             </button>
//           </div>

//           {/* ℹ️ Info Boxes */}

//           <div className="info-boxes w-full mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
//             <div className="flex bg-sky-100 px-4 py-4">
//               <div>
//                 <h2 className="font-medium text-xl">🚚 Free Delivery</h2>
//                 <p className="text-gray-600">Orders from all items</p>
//               </div>
//             </div>

//             <div className="flex bg-sky-100 px-4 py-4">
//               <div>
//                 <h2 className="font-medium text-xl">💰 Return & Refund</h2>
//                 <p className="text-gray-600">Money back guarantee</p>
//               </div>
//             </div>

//             <div className="flex bg-sky-100 px-4 py-4">
//               <div>
//                 <h2 className="font-medium text-xl">🛍️ Member Discount</h2>
//                 <p className="text-gray-600">On order over $99</p>
//               </div>
//             </div>

//             <div className="flex bg-sky-100 px-4 py-4">
//               <div>
//                 <h2 className="font-medium text-xl">📞 Support 24/7</h2>
//                 <p className="text-gray-600">Contact us 24 hours a day</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//       <div className='h-[10vh]'></div>
//     </div>
//   )
// }

// export default Products