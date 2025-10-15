import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './home.css';
import items from './Data';
import { NavLink } from 'react-router-dom';

function Home({ addcart2, search, cart, setSearch }) {

  const searchbar = items.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add to Cart nu popup 
  const [popup, setPopup] = useState(false);

  const showPopup = () => {
    setPopup(true);
    setTimeout(() => setPopup(false), 1000);
  };



  // Slider database
  const sliderData = [
    { img: 'images/laptop.webp', text: 'Best Laptops 2025', text2: 'Starting at $999 - Exclusive offer this week!' },
    { img: 'images/h1.webp', text: 'Latest Gadgets', text2: 'Check out newest frames' },
    { img: 'images/h2.webp', text: 'Smart Accessories', text2: 'Upgrade your Decorations' },
    { img: 'images/h3.webp', text: 'Top Deals', text2: 'Grab the best discounts' },
    { img: 'images/b2.png', text: 'Fashion Sale', text2: 'Trendy outfits at great prices' },
  ];


  // automatic sliderrr
  const [sliding, setsliding] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setsliding((prev) => (prev + 1) % sliderData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // next & prev Slide button
  const prevSlide = () => {
    setsliding((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setsliding((prev) => (prev + 1) % sliderData.length);
  };

  return (
    <div className="h-screen">

      <Nav cart={cart} setSearch={setSearch} />
      <div className="h-[10%] w-[100%]"></div>

      {/* Add to cart popup */}
      {popup && (
        <div className=" h-[10%] md:h-[15%] w-[60%] md:w-[25%] z-10 left-[70px] top-[150px] md:left-[530px] text-[8px] md:text-[15px] bg-yellow-300 font-bold flex items-center flex-col justify-center fixed font-mono rounded">
          <h3>✅ Item Added to cart!</h3>
          <p>Your item has been added successfully 🛒</p>
        </div>
      )}

      {/* Slider div */}
      <div className="relative w-full h-[35vh] md:h-[60vh] bg-sky-100 overflow-hidden flex items-center justify-center">

        <div
          className="flex transition-transform duration-[1500ms] ease-in-out w-full"
          style={{ transform: `translateX(-${sliding * 100}%)` }} >

          {sliderData.map((s, i) => (
            <div key={i} className="w-full flex-shrink-0 flex items-center justify-center">

              {/* Text */}
              <div className="w-[50%] md:w-[40%] h-full flex flex-col justify-center items-center p-4  md:p-8">
                <h1 className=" text-[15px] md:text-3xl font-bold mb-2">{s.text}</h1>
                <p className=" text-sm text-center md:text-lg mb-4">{s.text2}</p>
                <button onClick={() =>
                  document.getElementById("trending").scrollIntoView({ behavior: "smooth" })}
                  className=" text-xs md:text-lg p-2 md:p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white  rounded-lg font-bold transition-transform transform hover:scale-110 ">
                  Shop Now !👇
                </button>
              </div>

              {/* Image */}
              <div className="w-[50%] md:w-[60%] h-full flex justify-center items-center">
                <img
                  src={s.img}
                  alt={s.text}
                  className="h-full object-contain transition-transform duration-500 hover:scale-125"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-[50%] -translate-y-1/2 bg-gray-300 text-white px-1 md:px-3 md:py-1 rounded"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-[50%] -translate-y-1/2 bg-gray-300 text-white  px-1 md:px-3 md:py-1 rounded"
        >
          ❯
        </button>


        {/*slider  Dots */}
        <div className="absolute bottom-4 flex space-x-2">

          {sliderData.map((_, i) => (
            <span key={i} className={`h-1 w-2 md:w-4 rounded-full cursor-pointer ${i === sliding ? 'bg-blue-500'
              : 'bg-gray-300'
              }`}
              onClick={() => setsliding(i)}></span>
          ))}
        </div>

      </div>



      <div class=" px-4 text-center container grid gap-2 grid-cols-2 md:grid-cols-4 mt-8 mx-auto">

        <div class="flex items-center justify-center bg-gray-100 py-4 md:py-6 font-karla">
          <div>
            <h2 class="font-medium text-sm md:text-xl"> 🚚Free Delivery</h2>
            <p class="text-gray-600 text-xs md:text-base">Orders from all items</p>
          </div>
        </div>

        <div class="flex bg-gray-100 items-center justify-center py-4 md:py-6 font-karla">
          <div>
            <h2 class="font-medium text-sm md:text-xl"> 💰Return & Refund</h2>
            <p class="text-gray-600 text-xs md:text-base">Money back guarantee</p>
          </div>
        </div>

        <div class="flex bg-gray-100 items-center justify-center py-4 md:py-6 font-karla">
          <div>
            <h2 class="font-medium text-sm md:text-xl"> 🛍️ Member Discount</h2>
            <p class="text-gray-600 text-xs md:text-base">On order over $99</p>
          </div>
        </div>

        <div class="flex bg-gray-100 items-center justify-center md:py-6 font-karla">
          <div>
            <h2 class="font-medium text-sm md:text-xl"> 📞 Support 24/7</h2>
            <p class="text-gray-600 text-xs md:text-base">Contact us 24 hours a day</p>
          </div>
        </div>

      </div>


      {/* Trending Products */}
      <div className="itemdiv h-auto w-full flex flex-col items-center justify-start my-5">

        <div id="trending" className="h-[10vh] w-[85%] flex">
          <h1 className=" text-xl md:text-4xl font-semibold ">Trending Products</h1>
        </div>

        <div className="itemdiv2 h-auto w-[85%] flex justify-around flex-wrap">
          {searchbar.length === 0 ? (
            <h2 className=" h-[10%] md:h-[15%] w-[55%] md:w-[25%] left-[100px] top-[150px] md:left-[530px] md:top-[300px] text-[10px] md:text-[20px] bg-yellow-300 font-bold flex items-center flex-col justify-center fixed font-mono rounded">
              No products found 😢
            </h2>
          ) : (
            searchbar.map((p, i) => (
              <div
                key={i}
                className="card  md:h-[48vh] h-[28vh] w-[42%] md:w-[22%] border flex flex-col items-center justify-center m-2"
              >
                <div className="cardimg h-[60%] border w-full flex items-center justify-center">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="h-[80%] w-[60%] transition-transform duration-500 hover:scale-125"
                  />
                </div>

                <div className="cardtxt h-[40%] w-full px-3 text-left flex justify-around flex-col">
                  <NavLink to={`/product/${p.name}`} >
                    <h1 className="text-[8px] md:text-[15px] font-semibold hover:underline hover:text-pink-600 ">
                      {p.name}
                    </h1></NavLink>

                  <h1 className="text-[8px] md:text-[12px]">{p.rating}</h1>
                  <h1 className=" text-[12px] md:text-[18px] text-blue-500">{p.rate} <span className=" text-gray-600 text-[9px] md:text-[13px] "><del>{p.rate2}</del></span></h1>
                  <button
                    onClick={() => {
                      addcart2(p);
                      showPopup();
                    }}
                    className="w-[80%] mb-1 md:w-[60%] p-1 md:p-2 text-[9px] md:text-xs rounded md:font-semibold bg-blue-100 flex items-center justify-center  hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:text-white transition-transform transform hover:scale-110"
                  >
                    Add to cart 🛒
                  </button>

                </div>
              </div>
            ))
          )}
        </div>
      </div>


      <div class=" h-[10vh] bg-blue-500 text-[12px] md:text-[15px] text-white p-4 text-center mt-auto">
        <div>
          © Copyright | All Rights Reserved
        </div>

        <div>

          <a href='https://wanda11vision.github.io/portfolio/' className=" hover:underline hover:font-bold opacity-100 hover:opacity-100" >MY PORTFOLIO😎</a>
        </div>
      </div>



    </div>
  );
}

export default Home;











// import React, { useState, useEffect } from 'react';
// import Nav from './Nav';
// import './home.css';
// import items from './Data';
// import { NavLink } from 'react-router-dom';

// function Home({ addcart2, search, cart, setSearch }) {
//   const searchbar = items.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const [popup, setPopup] = useState(false);
//   const showPopup = () => {
//     setPopup(true);
//     setTimeout(() => setPopup(false), 1000);
//   };

//   const sliderData = [
//     { img: 'images/laptop.webp', text: 'Best Laptops 2025', text2: 'Starting at $999 - Exclusive offer this week!' },
//     { img: 'images/h1.webp', text: 'Latest Gadgets', text2: 'Check out newest tech' },
//     { img: 'images/h2.webp', text: 'Smart Accessories', text2: 'Upgrade your lifestyle' },
//     { img: 'images/h3.webp', text: 'Top Deals', text2: 'Grab the best discounts' },
//     { img: 'images/b2.png', text: 'Fashion Sale', text2: 'Trendy outfits at great prices' },
//   ];

//   const [sliding, setsliding] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setsliding((prev) => (prev + 1) % sliderData.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setsliding((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
//   };
//   const nextSlide = () => {
//     setsliding((prev) => (prev + 1) % sliderData.length);
//   };

//   return (
//     <div className="w-full h-auto">
//       <Nav cart={cart} setSearch={setSearch} />
//       {popup && (
//         <div className="fixed left-1/2 top-1/3 transform -translate-x-1/2 bg-yellow-300 text-rose-600 rounded p-4 text-center z-50">
//           <h3 className="font-bold">✅ Item Added to cart!</h3>
//           <p>Your item has been added successfully 🛒</p>
//         </div>
//       )}

//       {/* Slider */}
//       <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center bg-sky-100">
//         <div
//           className="flex transition-transform duration-[1500ms] ease-in-out w-full"
//           style={{ transform: `translateX(-${sliding * 100}%)` }}
//         >
//           {sliderData.map((s, i) => (
//             <div key={i} className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center">
//               {/* Text */}
//               <div className="w-full md:w-2/5 flex flex-col justify-center items-center p-4 md:p-8 text-center md:text-left">
//                 <h1 className="text-2xl md:text-3xl font-bold mb-2">{s.text}</h1>
//                 <p className="text-md md:text-lg mb-4">{s.text2}</p>
//                 <button
//                   onClick={() =>
//                     document.getElementById("trending").scrollIntoView({ behavior: "smooth" })
//                   }
//                   className="p-3 md:p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-bold transition-transform transform hover:scale-110"
//                 >
//                   Shop Now! 👇
//                 </button>
//               </div>
//               {/* Image */}
//               <div className="w-full md:w-3/5 h-[40vh] md:h-full flex justify-center items-center">
//                 <img
//                   src={s.img}
//                   alt={s.text}
//                   className="h-full md:h-[80%] object-contain transition-transform duration-500 hover:scale-110"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Prev/Next Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 text-white px-3 py-1 rounded"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 text-white px-3 py-1 rounded"
//         >
//           ❯
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-2 flex space-x-2">
//           {sliderData.map((_, i) => (
//             <span
//               key={i}
//               className={`h-2 w-2 rounded-full cursor-pointer ${i === sliding ? 'bg-blue-500' : 'bg-gray-300'}`}
//               onClick={() => setsliding(i)}
//             ></span>
//           ))}
//         </div>
//       </div>

//       {/* Info Boxes */}
//       <div className="px-2 sm:px-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-6">
//         {[
//           { title: "🚚 Free Delivery", desc: "Orders from all items" },
//           { title: "💰 Return & Refund", desc: "Money back guarantee" },
//           { title: "🛍️ Member Discount", desc: "On order over $99" },
//           { title: "📞 Support 24/7", desc: "Contact us 24 hours a day" },
//         ].map((info, i) => (
//           <div key={i} className="flex flex-col sm:flex-row bg-gray-100 px-4 py-6 items-center">
//             <div>
//               <h2 className="font-medium text-lg md:text-xl">{info.title}</h2>
//               <p className="text-gray-600 text-sm md:text-base">{info.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Trending Products */}
//       <div id="trending" className="mt-8 w-full flex flex-col items-center">
//         <h1 className="text-2xl md:text-4xl font-semibold mb-4">Trending Products</h1>
//         <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start w-full px-2 md:px-8 gap-4">
//           {searchbar.length === 0 ? (
//             <h2 className="text-center left-[600px] top-[300px] text-lg bg-yellow-400 text-rose-600 font-bold p-4 rounded">
//               No products found 😢
//             </h2>
//           ) : (
//             searchbar.map((p, i) => (
//               <div
//                 key={i}
//                 className="border rounded p-2 flex flex-col items-center w-full sm:w-1/2 md:w-[23%] "
//               >
//                 <img
//                   src={p.photo}
//                   alt={p.name}
//                   className="h-40 w-auto object-contain mb-2 transition-transform duration-500 hover:scale-110"
//                 />
//                 <NavLink to={`/product/${p.name}`}>
//                   <h1 className="font-medium hover:underline text-black text-base md:text-sm text-center">
//                     {p.name}
//                   </h1>
//                 </NavLink>
//                 <p className="text-sm">{p.rating}</p>
//                 <p className="text-blue-500 font-semibold">{p.rate}</p>
//                 <button
//                   onClick={() => { addcart2(p); showPopup(); }}
//                   className="mt-2 w-2/3 bg-blue-100 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:text-white rounded p-2 transition-transform transform hover:scale-105"
//                 >
//                   Add to cart 🛒
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="h-auto bg-blue-500 text-white p-4 text-center mt-8">
//         <p>© Copyright | All Rights Reserved</p>
//         <a
//           href="https://wanda11vision.github.io/portfolio/"
//           className="hover:underline hover:font-bold opacity-85 hover:opacity-100"
//         >
//           MY PORTFOLIO 😎
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Home;
