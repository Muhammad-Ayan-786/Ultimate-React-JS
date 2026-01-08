import { use } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'

const App = () => {

  return (
    <div>
      <Navbar />
      <Card />
      {Card()}
    </div>
  )
}

export default App

/*
To give a class name to an element, you can use the className attribute.

In App.jsx file, u don't write/make everything in here. U make components and import them and use it in here.

Component is a piece of code that is used for a particular feature. The advantage of using components is that it makes the code more reusable. And the page does not rerender when something changes. 

If we want to print the value of a variable, we use curly braces { } . And to call a function, with parentheses ( ) , write it in the { } or without ( ) we can use self-closing tags < />.
Example:
<div>
  <Card />
  {Card()}
</div>
*/