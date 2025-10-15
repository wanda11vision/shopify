import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './home.css';
import items from './Data';
import { NavLink } from 'react-router-dom';

function Categories({ addcart2, search, cart, setSearch }) {

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
    { img: 'images/h1.webp', text: 'Latest Gadgets', text2: 'Check out newest tech' },
    { img: 'images/h2.webp', text: 'Smart Accessories', text2: 'Upgrade your lifestyle' },
    { img: 'images/h3.webp', text: 'Top Deals', text2: 'Grab the best discounts' },
    { img: 'images/b2.png', text: 'Fashion Sale', text2: 'Trendy outfits at great prices' },
  ];


  // automatic sliderrr
  const [sliding, setsliding] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setsliding((prev) => (prev + 1) % sliderData.length);
    }, 5000);
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
        <div className="h-[15%] w-[30%] text-[18px] font-bold flex items-center flex-col justify-center fixed text-rose-600 bg-yellow-300 rounded left-[600px] top-[300px]">
          <h3>✅ Item Added to cart!</h3>
          <p>Your item has been added successfully 🛒</p>
        </div>
      )}

      {/* Slider div */}
      <div className="relative w-full h-[60vh] bg-sky-100 overflow-hidden flex items-center justify-center">

        <div
          className="flex transition-transform duration-[1500ms] ease-in-out w-full"
          style={{ transform: `translateX(-${sliding * 100}%)` }} >

          {sliderData.map((s, i) => (
            <div key={i} className="w-full flex-shrink-0 flex items-center justify-center">

              {/* Text */}
              <div className="w-[40%] h-full flex flex-col justify-center items-center p-8">
                <h1 className="text-3xl font-bold mb-2">{s.text}</h1>
                <p className="text-lg mb-4">{s.text}</p>
                <button onClick={() =>
                  document.getElementById("trending").scrollIntoView({ behavior: "smooth" })}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-pink-600">
                  Shop Now !👇
                </button>
              </div>

              {/* Image */}
              <div className="w-[60%] h-full flex justify-center items-center">
                <img
                  src={s.img}
                  alt={s.text}
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-[50%] -translate-y-1/2 bg-gray-300 text-white px-3 py-1 rounded"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-[50%] -translate-y-1/2 bg-gray-300 text-white px-3 py-1 rounded"
        >
          ❯
        </button>


        {/*slider  Dots */}
        <div className="absolute bottom-4 flex space-x-2">

          {sliderData.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full cursor-pointer ${i === sliding ? 'bg-blue-500'
              : 'bg-gray-300'
              }`}
              onClick={() => setsliding(i)}></span>
          ))}
        </div>

      </div>



      <div class="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">

        <div class="flex gap-2 bg-gray-100 px-4 py-6 font-karla">
          <div>
            <h2 class="font-medium text-xl"> 🚚Free Delivery</h2>
            <p class="text-gray-600">Orders from all items</p>
          </div>
        </div>

        <div class="flex gap-2 bg-gray-100 px-4 py-6 font-karla">
          <div>
            <h2 class="font-medium text-xl">💰Return & Refund</h2>
            <p class="text-gray-600">Money back guarantee</p>
          </div>
        </div>


        <div class="flex gap-2 bg-gray-100  px-4 py-6 font-karla">
          <div>
            <h2 class="font-medium text-xl">🛍️ Member Discount</h2>
            <p class="text-gray-600">On order over $99</p>
          </div>
        </div>


        <div class="flex gap-2 bg-gray-100  px-4 py-6 font-karla">
          <div>
            <h2 class="font-medium text-xl ">📞 Support 24/7</h2>
            <p class="text-gray-600 dark:text-white">Contact us 24 hours a day</p>
          </div>
        </div>
        
      </div>


      {/* Trending Products */}
      <div className="itemdiv h-auto w-full flex flex-col items-center justify-start mt-5 mb-5">

        <div id="trending" className="h-[10vh] w-[85%] flex">
          <h1 className="text-4xl font-semibold ">Trending Products</h1>
        </div>

        <div className="itemdiv2 h-auto w-[85%] flex justify-around flex-wrap">
          {searchbar.length === 0 ? (
            <h2 className="h-[15%] w-[25%] text-[25px] bg-yellow-400 text-rose-600 font-bold flex items-center flex-col justify-center fixed rounded left-[600px] top-[300px]">
              No products found 😢
            </h2>
          ) : (
            searchbar.map((p, i) => (
              <div
                key={i}
                className="card h-[48vh] w-[22%] border flex flex-col items-center justify-around m-2"
              >
                <div className="cardimg h-[65%] w-full flex items-center justify-center">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="h-[80%] w-[60%] transition-transform duration-500 hover:scale-125"
                  />
                </div>

                <div className="cardtxt h-[35%] w-full flex border">
                  <div className="w-[100%] px-3 text-left flex justify-around flex-col">
                    <NavLink to={`/product/${p.name}`} ><h1 className="font-semibold hover:underline hover:text-pink-600 text-black text-[15px]">
                      {p.name}
                    </h1></NavLink>

                    <h1 className="text-[8px]">{p.rating}</h1>
                    <h1 className="text-[18px] text-blue-500">{p.rate}</h1>
                    <button
                      onClick={() => {
                        addcart2(p);
                        showPopup();
                      }}
                      className="w-[60%] flex items-center justify-center p-2 text-xs hover:bg-pink-600 hover:text-white rounded bg-gray-200"
                    >
                      Add to cart 🛒
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>


      <div class=" h-[10vh] bg-blue-500 text-white p-4 text-center mt-auto">
        <div>
          © Copyright | All Rights Reserved
        </div>

        <div>

          <a href='https://wanda11vision.github.io/portfolio/' className=" hover:underline hover:font-bold opacity-85 hover:opacity-100" >MY PORTFOLIO😎</a>
        </div>
      </div>



    </div>
  );
}

export default Categories;


