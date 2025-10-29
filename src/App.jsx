import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Products from "./page/Products";
import Login from "./page/Login";
import Product from "./page/Product";
import Categories from "./page/Categories";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const a = createHashRouter([
    {
      path: "/",
      element: <Home setSearch={setSearch} />
    },

    {
      path: "/categories",
      element: <Categories setSearch={setSearch} />
    },

    {
      path: "/login",
      element: <Login setSearch={setSearch} />
    },
    {
      path: "/products",
      element: <Products setSearch={setSearch} />
    },
    {
      path: "/product/:proname",
      element: <Product setSearch={setSearch} />
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={a} />
    </Provider>
  );
}

export default App;




// import { createHashRouter, RouterProvider } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Home from './page/Home'
// import Products from './page/Products'
// import Login from './page/Login'
// import Product from './page/Product'
// import Categories from './page/Categories'

// function App() {

//   const [cart, setCart] = useState(() => {
//     // Initial load from localStorage, agar hai to parse karo, warna empty array
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   // localStorage me save karte raho jab bhi cart change ho
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);


//   // Add to cart function
//   const addToCart = (itemsss) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((it) => it.name === itemsss.name);

//       if (existing) {
//         return prevCart.map((it) =>
//           it.name === itemsss.name
//             ? { ...it, quantity: it.quantity + 1 }
//             : it
//         );
//       } else {
//         return [...prevCart, { ...itemsss, quantity: 1 }];
//       }
//     });
//   };

//   // searchbar
//   const [search, setSearch] = useState("");

//   const a = createHashRouter([

//     {
//       path: '/',
//       element: <Home addcart2={addToCart} cart={cart} search={search} setSearch={setSearch} />
//     },
//     {
//       path: '/Categories',
//       element: <Categories addcart2={addToCart} cart={cart} search={search} setSearch={setSearch} />
//     },
//     {
//       path: '/login',
//       element: <Login cart={cart} setSearch={setSearch} />
//     },
//     {
//       path: '/products',
//       element: <Products cart={cart} setSearch={setSearch} setCart={setCart} />
//     },
//     ,
//     {
//       path: '/product/:proname',
//       element: <Product cart={cart} setSearch={setSearch} setCart={setCart} />
//     }
//   ])
//   return (
//     <div>
//       <RouterProvider router={a} />
//     </div>
//   )
// }

// export default App









