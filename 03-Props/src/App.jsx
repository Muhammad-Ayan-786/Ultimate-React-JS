import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Harry" age={21} pic="https://images.unsplash.com/photo-1679210208115-bd46ce81a133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fDNkJTIwcmVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card user="Ayan" age={18} pic="https://images.unsplash.com/photo-1676725151088-3d47c63d6854?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fDNkJTIwcmVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D" />
    </div>
  )
}

export default App

/*
We always pass the data from parent to child as props.
Example: U can pass the data to Card from App, & receive it in Card component.

Props = Properties

We pass the data to the function/component as an attribute.
Example: <Card user="Harry" />
*/