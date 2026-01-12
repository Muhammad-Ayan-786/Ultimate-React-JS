import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault() // Stops page from reloading
    console.log("Form Submitted")
  }

  return (
    <div className='container'>
      <h1>Form :</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App