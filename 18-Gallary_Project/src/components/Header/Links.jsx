import { ChartNoAxesGantt } from 'lucide-react'

const Links = () => {
  return (
    <div className="links">
      <ul className='flex gap-8'>
        <li
          className='py-1 px-3 flex items-center bg-gray-100 text-black text-xs font-bold rounded cursor-pointer uppercase'>
          <ChartNoAxesGantt size={17} strokeWidth={2} />
        </li>

        <li
          className='py-1 px-3 flex items-center bg-gray-100 text-black text-xs font-bold rounded cursor-pointer uppercase'>
          Home
        </li>

        <li
          className='py-1 px-3 flex items-center bg-gray-100 text-gray-400 text-xs font-bold rounded cursor-pointer uppercase'>
          Gallery
        </li>

      </ul>
    </div>
  )
}

export default Links