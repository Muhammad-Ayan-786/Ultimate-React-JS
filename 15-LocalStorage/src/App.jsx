import React from 'react'

const App = () => {

  // Browser Local Storage
  localStorage.setItem('user', 'Ayan')
  const user = localStorage.getItem('user')

  localStorage.setItem('age', '17')
  const age = localStorage.getItem('age')

  localStorage.removeItem(user)
  localStorage.removeItem(age)


  // Save Objects in Local Storage as Strings
  const userOBJ = {
    name: 'Ayan',
    age: 17,
    city: 'Johannesburg'
  }

  localStorage.setItem('userOBJ', JSON.stringify(userOBJ))


  const getUserStringForm = localStorage.getItem('userOBJ')
  console.log(getUserStringForm); // Returns a stringified object

  const getUserObjectForm = JSON.parse(localStorage.getItem('userOBJ'))
  console.log(getUserObjectForm); // Returns an object


  return (
    <div>
      <h1>LOCAL STORAGE</h1>
    </div>
  )
}

export default App