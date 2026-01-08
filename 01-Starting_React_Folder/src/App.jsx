import React from 'react'

const App = () => {
  return (
    <>
      <div id='parent'>
        <h1 id='child1'>App</h1>
        <h3 id='child2'>Hello</h3>
      </div>
      <div id="uncle"></div>
    </>

    // <h1>Hi</h1> // Can't return more than one element. If you want to return more than one element, you need to wrap them in a parent element

    // <></> This is a fragment. You can use it to wrap multiple elements
  )
}

export default App