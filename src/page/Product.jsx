import { NavLink, useParams } from "react-router-dom"
import items from "./Data"
import Nav from "./Nav"


function Product({ cart, setCart, setSearch }) {
  const { proname } = useParams()
  const p = items.find((z) => {
    return z.name === proname
  })

  return (
    <div className="h-screen " >
      <Nav cart={cart} setSearch={setSearch} />
      <div className=" h-[12%] md:h-[20%] "></div>

      <div className='h-auto  w-[100%] flex justify-center '>

        <div className='h-[60vh] w-[80%] md:h-[60vh] md:w-[70%]   md:flex  items-start'>

          <div className=' h-[60%] w-[100%] md:h-full md:w-[35%] border-2  flex items-center justify-center'>
            <img src={p.photo} alt={p.title} className=" h-[80%] transition-transform duration-500 hover:scale-125" />
          </div>

          <div className=' md:h-full md:w-[65%] flex border-2' >

            <div className=' md:w-[90%] px-3 text-left  flex justify-around flex-col'>
              <h1 className=" hover:underline text-black md:text-[25px]">
                <b>{p.name}</b>
              </h1>
              <h1>{p.rating}</h1>
              <h1 className=' md:text-2xl text-blue-500'>{p.rate} <span className=" text-gray-600 text-[9px] md:text-[15px] "><del>{p.rate2}</del></span></h1>
              <h1 className=" text-[12px] md:text-[15px] " ><b>About The Product</b></h1>
              <h1 className=" text-gray-600 text-[9px] md:text-[15px] ">{p.detail}</h1>
              <NavLink to={'/products'}> <button className=" w-[40%] text-[12px] md:w-[20%] my-2 p-2 md:p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white  rounded-lg font-bold transition-transform transform hover:scale-110" >Buy Now</button></NavLink>

            </div>
          </div>

        </div>



      </div>

    </div>
  )
}

export default Product
