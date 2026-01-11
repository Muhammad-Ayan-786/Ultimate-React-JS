import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  // console.log(props.id);

  return (
    <div className=' h-full w-60 rounded-4xl shrink-0 overflow-hidden relative'>
      <img className=' h-full w-full object-cover blur-[0.8px]' src={props.img} alt="Image" />
      <RightCardContent color={props.color} id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  )
}

export default RightCard