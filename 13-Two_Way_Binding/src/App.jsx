import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault() // Stops page from reloading
    console.log(`Form Submitted by ${title}`)
    setTitle('')
  }

  return (
    <div className='container'>
      <h1>Form :</h1>

      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder='Enter your name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App