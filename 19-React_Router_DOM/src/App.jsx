import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='page'>
      <div className="nav">
        <h2>Routing</h2>
        <div className="links">
          {/*
          Anchor tag is reloading the page which we don't want. Use Link tag instead
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>

      <div>
        {/* What ever is written above this and show on every route */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Routes>
        {/* What ever is written under this and show on every route */}
      </div>

      <div className="footer">
        <h2>This is a Footer</h2>
      </div>
    </div>
  )
}

export default App

/*
• Routes is a container that stores all the routes. It is not a self-closing tag

• Route is a single route that directs the page and it is a self-closing tag

• Use Link tag instead of Anchor tag, cuz Anchor tag is reloading the page which we don't want. And Link tag is not self-closing tag

• Import the Routes, Route and Link from 'react-router-dom'
*/