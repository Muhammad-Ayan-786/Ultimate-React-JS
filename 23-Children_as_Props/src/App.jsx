import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div>
      <Navbar theme={theme}>
        <p>This is a Navbar</p>
        <p>Very Beautiful Navbar</p>
      </Navbar>
    </div>
  )
}

export default App