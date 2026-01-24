import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div>
      <button
        onClick={() => {
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }}
        style={{
          background: theme === 'light' ? 'skyblue' : 'darkblue',
          color: theme === 'light' ? 'black' : 'white',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px 45px',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          fontSize: '1.6rem',
          fontWeight: '600'
        }}
      >
        Change theme to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default Button