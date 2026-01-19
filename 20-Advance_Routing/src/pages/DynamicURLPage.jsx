import { useParams } from "react-router-dom";

const DynamicURLPage = () => {

  // useParams is used to get the params from the url
  const params = useParams() // Returns an object of the params from the url u have passed
  // console.log(useParams());

  // Params stands for parameters

  return (
    <div className='h-full flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-7xl text-blue-600 font-bold tracking-wider'>DynamicURLPage</h1>
      <p className='text-2xl font-semibold'>I'm a Dynamic set page, so if someone write anything in the url after dynamicPage/... I will redirect to this page</p>
      <p className='text-2xl font-semibold'>The id is: {params.id}</p>
    </div>
  )
}

export default DynamicURLPage