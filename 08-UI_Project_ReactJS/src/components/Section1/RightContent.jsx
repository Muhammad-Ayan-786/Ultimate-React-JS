import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  // console.log(props);

  return (
    <div id='userCardCont' className=' h-full w-4/6 p-6 flex gap-5 flex-nowrap overflow-x-auto'>
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} />
      })}
    </div>
  )
}

export default RightContent