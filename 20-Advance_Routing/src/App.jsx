import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import DynamicPage from './pages/DynamicPage'
import DynamicURLPage from './pages/DynamicURLPage'
import { House, Redo, Undo2 } from "lucide-react";

const App = () => {

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div className='w-full h-screen bg-black flex flex-col justify-between'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          {/* This is a good approach for nested routes */}
          <Route path='men' element={<Men />} /> {/* Don't use '/' */}
          <Route path='women' element={<Women />} /> {/* Don't use '/' */}
          <Route path='kids' element={<Kids />} /> {/* Don't use '/' */}
        </Route>
        <Route path='/wrongPage' element={<NotFound />} />
        <Route path='dynamicPage' element={<DynamicPage />} />

        {/* Dynamic Routing */}
        <Route path='/dynamicPage/:id' element={<DynamicURLPage />} /> {/* :id is a dynamic parameter, it can be anything. U can also use other name after ':' . Example: :name . ':' is just to show that it is a dynamic parameter */}

        {/* This is not a good approach for nested routes */}
        {/* <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} /> */}

        {/* No Found Page | 404 Error Page */}
        <Route path='*' element={<NotFound />} /> {/* path='*' shows Not Found Page */}
      </Routes>

      <button className='fixed bottom-20 right-10 bg-blue-500 p-3 rounded-full cursor-pointer transition-all hover:bg-blue-700 active:scale-95' onClick={navigateHome}>
        <House />
      </button>

      <button className='fixed bottom-40 right-10 bg-blue-500 p-3 rounded-full cursor-pointer transition-all hover:bg-blue-700 active:scale-95' onClick={() => navigate(-1)}>
        <Undo2 />
      </button>

      <button className='fixed bottom-40 right-30 bg-blue-500 p-3 rounded-full cursor-pointer transition-all hover:bg-blue-700 active:scale-95' onClick={() => navigate(+1)}>
        <Redo />
      </button>

      <Footer />
    </div>
  )
}

export default App