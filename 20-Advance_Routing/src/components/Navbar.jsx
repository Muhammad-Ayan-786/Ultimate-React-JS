import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='w-full h-16 flex py-4 px-6 justify-between bg-gray-800'>
      <div className="relative">
        <h2 className='text-3xl font-bold text-white italic z-10 underline relative'>
          Adv-Routing
          <div className="absolute top-[-10px] left-[-5px]  w-10 h-10 -z-10 rounded-full bg-orange-600"></div>
        </h2>
      </div>

      <div className='flex gap-5'>
        <Link
          className='flex items-center bg-orange-500 outline-none text-zinc-200 py-1 px-3.5 rounded cursor-pointer font-bold transition-all active:scale-95 hover:bg-white hover:text-pink-500'
          to="/"
        >
          Home
        </Link>

        <Link
          className='flex items-center bg-orange-500 outline-none text-zinc-200 py-1 px-3.5 rounded cursor-pointer font-bold transition-all active:scale-95 hover:bg-white hover:text-pink-500'
          to="/about"
        >
          About
        </Link>

        <Link
          className='flex items-center bg-orange-500 outline-none text-zinc-200 py-1 px-3.5 rounded cursor-pointer font-bold transition-all active:scale-95 hover:bg-white hover:text-pink-500'
          to="/product"
        >
          Product
        </Link>

        <Link
          className='flex items-center bg-orange-500 outline-none text-zinc-200 py-1 px-3.5 rounded cursor-pointer font-bold transition-all active:scale-95 hover:bg-white hover:text-pink-500'
          to="/dynamicPage"
        >
          Dynamic Page
        </Link>

        <Link
          className='flex items-center bg-orange-800 outline-none text-zinc-200 py-1 px-3.5 rounded cursor-pointer font-bold transition-all active:scale-95 hover:bg-black hover:text-pink-500'
          to="/wrongPage"
        >
          404 Page
        </Link>

      </div>
    </div>
  )
}

export default Navbar