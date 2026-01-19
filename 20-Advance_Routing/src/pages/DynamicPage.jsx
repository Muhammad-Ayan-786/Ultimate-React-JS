const DynamicPage = () => {
  return (
    <div className='h-full flex flex-col gap-6 justify-center items-center'>
      <h1 className='text-7xl font-extrabold text-center italic text-white'>Dynamic Page</h1>
      <p className='text-5xl font-extrabold text-center italic text-orange-400'>Write anything in the url, then you will redirect to a Dynamically Generated Page</p>
    </div>
  )
}

export default DynamicPage