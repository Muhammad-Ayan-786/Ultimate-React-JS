import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className=' absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between bg-transparent'>
      <h2 style={{ background: props.color }} className=' w-8 h-8 rounded-full flex justify-center items-center font-bold text-1xl text-white'>{props.id + 1}</h2>
      <div className=' flex flex-col gap-10'>
        <p className=' text-base font-medium text-white drop-shadow-2xl text-shadow-lg'>{props.intro}</p>

        <div className=' flex gap-2.5'>
          <button style={{ background: props.color }} className=' text-white font-semibold px-4 py-1 rounded-full cursor-pointer'>{props.tag}</button>
          <button style={{ background: props.color }} className=' text-white font-semibold px-2 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>)
}

export default RightCardContent