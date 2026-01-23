import { Blocks } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center px-12 border-b-2 bg-zinc-950">
      <div className="logo flex items-center gap-2 text-3xl">
        <Blocks size={30} color="#33e63f" />
        <h2 className="font-extrabold">AKOR</h2>
      </div>

      <div className="navlinks flex gap-20">
        <Link className="py-1.5 px-5 rounded cursor-pointer transition-all font-bold bg-gray-900 hover:underline hover:bg-gray-800" to='/'>Home</Link>
        <Link className="py-1.5 px-5 rounded cursor-pointer transition-all font-bold bg-gray-900 hover:underline hover:bg-gray-800" to='/about'>About</Link>
        <Link className="py-1.5 px-5 rounded cursor-pointer transition-all font-bold bg-gray-900 hover:underline hover:bg-gray-800" to='/services'>Services</Link>
      </div>

      <div className="qoute-btn">
        <button className="bg-gray-900 text-white py-3 px-14 rounded uppercase text-xs font-bold">Get Quote</button>
      </div>
    </div>
  )
}

export default Navbar