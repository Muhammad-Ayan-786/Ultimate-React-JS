import LanguageBtn from './LanguageBtn'
import Links from './Links'
import Logo from './Logo'

const Navbar = () => {

  return (
    <div className="navbar h-16 w-full flex justify-between items-center px-16 border-b-2 border-gray-300">

      <div className='w-5/12 flex justify-between items-center'>
        <Logo />
        <Links />
      </div>

      <LanguageBtn />
    </div>
  )
}

export default Navbar