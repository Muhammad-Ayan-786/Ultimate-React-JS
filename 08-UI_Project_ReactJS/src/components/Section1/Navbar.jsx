import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between align-center py-6 px-16'>
      <h4 className='bg-black rounded-full px-3 py-2 flex items-center justify-center text-1xl uppercase text-white'>Target Audience</h4>
      <button className='bg-gray-50 cursor-pointer px-3 py-2.5 rounded-full text-sm tracking-widest uppercase font-bold'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar