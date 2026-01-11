import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className=' w-full h-[87vh] pb-10 pt-2 px-18 flex justify-between items-center gap-4'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content