import { Link } from "react-router-dom"

const HomeBtns = () => {
  return (
    <div className="btns flex gap-8 items-center">
      <Link className="py-3 px-14 bg-green-500 rounded text-black font-bold uppercase transition-all hover:bg-green-600 hover:text-white" to='/services'>Get Consultation</Link>
      <Link className="font-semibold uppercase border-b-2 border-green-500" to='/about'>Learn More</Link>
    </div>)
}

export default HomeBtns