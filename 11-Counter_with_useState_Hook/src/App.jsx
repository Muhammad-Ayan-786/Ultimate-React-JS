import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from "lucide-react";

const App = () => {

  const [obj, setObj] = useState({
    count: 0,
    paraColor: '#d1d5dc',
    color: '#d1d5dc',
    colorINC: 'lime',
    colorDEC: '#ff4747'
  })

  if (obj.count == 0) {
    obj.paraColor = '#d1d5dc'
  }

  const increment = (e) => {
    const newObj = { ...obj }

    e.style.color = obj.colorINC
    newObj.paraColor = 'lime'

    setTimeout(() => {
      e.style.color = obj.color
    }, 1000);

    setObj(newObj)
    setObj(prev => ({ ...prev, count: prev.count + 1 }))
  }

  const decrement = (e) => {
    const newObj = { ...obj }

    e.style.color = obj.colorDEC
    newObj.paraColor = '#ff4747'

    setTimeout(() => {
      e.style.color = obj.color
    }, 1000);

    setObj(newObj)
    setObj(prev => ({ ...prev, count: prev.count - 1 }))
  }

  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center bg-gray-300'>
      <div className=' w-40 bg-gray-400 flex flex-col justify-center items-center gap-10 rounded-full'>

        <div
          style={{ color: obj.color }}
          className=' cursor-pointer'
          onClick={(e) => {
            increment(e.currentTarget);
          }}
        >
          <ChevronUp size={150} />
        </div>

        <div className=' cursor-default'>
          <p
            style={{ color: obj.paraColor }}
            className=' text-8xl text-gray-300 tracking-wider'
          >
            {obj.count}
          </p>
        </div>

        <div
          style={{ color: obj.color }}
          className=' cursor-pointer'
          onClick={(e) => {
            decrement(e.currentTarget);
          }}
        >
          <ChevronDown size={150} />
        </div>

      </div>
    </div >
  )
}

export default App