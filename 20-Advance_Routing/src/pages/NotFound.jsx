import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-3/4 mt-5 flex flex-col justify-center items-center gap-5 px-5 text-white">
      <h1 className="text-8xl font-extrabold">404 | Page Not Found</h1>
      <h3 className="text-6xl text-gray-600 tracking-tighter font-bold capitalize">Oops, this page not found !</h3>
      <h4 className="text-4xl text-gray-300 tracking-tight">The link might be corrupted</h4>
      <p className="text-white text-md">or the page may have been removed</p>
      <Link className="text-black py-1.5 px-8 bg-white font-bold text-lg rounded-xl transition-all hover:scale-105 active:scale-95" to='/'>Home</Link>
    </div>
  )
}

export default NotFound