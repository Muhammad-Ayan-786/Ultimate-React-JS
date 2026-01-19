const Home = () => {
  return (
    <div className='w-full h-screen bg-skyblue-500 flex-1 flex justify-between gap-5 px-5'>

      {/* Left Side */}
      <div className='w-1/2 h-full flex items-center px-2'>
        <h1 className='text-white text-shadow-xs text-shadow-white text-8xl font-bold tracking-wide w-11/12 leading-24'>
          Welcome To
          <br />
          <span className='text-orange-500 font-extrabold bg-gray-900 text-6xl py-2 px-3 text-shadow-none rounded-3xl italic'>
            Advance Routing
          </span>
        </h1 >
      </div>

      {/* Right Side */}
      <div className='w-1/2 flex h-full justify-center items-center'>
        <img className='w-[57%] h-[60%] object-cover rounded-full hover:scale-105 transition-all duration-300' src="./public/img.jpg" />
      </div>
    </div>
  )
}

export default Home