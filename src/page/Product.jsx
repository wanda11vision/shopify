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
      <div className="h-[20%] "></div>

      <div className='h-auto  w-[100%] flex flex-col items-center justify-center'>
              <div className='h-auto w-[85%]  flex items-start '>
    
      
                    <div className=' h-[60vh] w-[100%] m-3 flex  items-start'>
      
                      <div className='h-full w-[35%] border-2  flex items-center justify-center'>
                        <img src={p.photo} alt={p.title} className=" transition-transform duration-500 hover:scale-125" />
                      </div>
      
                      <div className='h-full w-[65%] flex border-2' >
      
                        <div className='w-[80%] px-3 text-left  flex justify-around flex-col'>
                          <h1 className="font-semibold hover:underline text-black text-[15px]">
                            {p.name}
                          </h1>
                          <h1>{p.rating}</h1>
                          <h1 className='text-2xl text-blue-500'>{p.rate}</h1>
                        </div>
      
                        <div className=' w-[30%] flex items-center justify-center'>
                          <NavLink to={'/login'}> <button className='bg-gray-200 text-black-700 rounded p-2 text-xs'>Buy Now</button></NavLink>
                        </div>
      
                      </div>
      
                    </div>

      
              </div>
            </div>

    </div>
  )
}

export default Product
