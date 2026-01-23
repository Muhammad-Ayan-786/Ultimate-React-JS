import { ArrowBigLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='bg-gray-300 flex-1 flex justify-center items-center flex-col gap-5'>
      <img className='w-1/3' src="/public/error-text.png" alt="404" />
      <h1 className='text-5xl text-gray-600'>Page not found</h1>
      <p className='text-lg text-gray-600'>You are supposed to see this</p>
      <Link className='flex items-center justify-center py-2 px-10 gap-3 rounded-full bg-white capitalize text-md font-semibold text-gray-700 transition-all hover:bg-gray-700 hover:text-white' to='/'>
        <ArrowBigLeft size={20} />
        HOME
      </Link>
    </div>
  )
}

export default Error404