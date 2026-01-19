import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className='flex-1 w-full flex flex-col items-center gap-5 p-5 rounded-xl'>

      <div className='w-4/6 h-16 flex justify-center items-center gap-5 py-4 bg-orange-500 rounded-full'>
        {/* Mens' Collection Link */}
        <Link
          to='/product/men'
          className='text-orange-400 py-1.5 px-8 bg-white font-bold text-lg rounded-xl transition-all hover:scale-105 active:scale-95'
        >
          Mens' Collection
        </Link>

        {/* Womenss' Collection Link */}
        <Link
          to='/product/women'
          className='text-orange-400 py-1.5 px-8 bg-white font-bold text-lg rounded-xl transition-all hover:scale-105 active:scale-95'
        >
          Womens' Collection
        </Link>

        {/* Kids' Collection Link */}
        <Link
          to='/product/kids'
          className='text-orange-400 py-1.5 px-8 bg-white font-bold text-lg rounded-xl transition-all hover:scale-105 active:scale-95'
        >
          Kids' Collection
        </Link>
      </div>

      <div className='w-full h-full flex-1'>
        <Outlet /> {/* Outlet Component for rendering child routes */}
      </div>

    </div >
  )
}

export default Product