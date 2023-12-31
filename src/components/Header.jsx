import {React, useState, useEffect} from 'react'

//import icons
import { HiMenu, HiOutlineX } from 'react-icons/hi'
//import components
import MobileNav from './templates/MobileNav.jsx'
import Nav from './templates/Nav.jsx'
import { header } from '../../data.js'
const Header = () => {
  const [mobileNav, setMovileNav] = useState(false);
  // header state
  const [isActive, setisActive] = useState(false);
  //destructure header data
  const { logo } = header
  const handleMobileNavClick = () => {
    // Aquí puedes realizar las acciones que desees cuando se hace clic en un elemento de MobileNav
    // Por ejemplo, cerrar el menú móvil
    setMovileNav(false);
  };
  //scroll event 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false)
    })
  })
  return (
    <header
      className={`
        ${isActive
          ? 'bg-white shadow-2xl'
          : 'lg:top-[0px]'}
        py-2 fixed w-full transition-all z-10 
        `}
    >
      <div className='mx-auto flex justify-between items-center '>
        {/* logo */}
        <a
          href='/'
          data-aos='fade-down-right'
          data-aos-delay='1000'
          className='h-16 '
        >
          <img
            src={logo}
            alt='logo'
            className='w-full h-full object-cover p-1'
            loading="lazy"
          />
        </a>
        {/** nav - initially hidden - show on desktop mode **/}
        <div
          className='hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>
        {/** cta button - initially hideen - show on desktop mode **/}
        {/** mobile nav trigger btn - hidden on desktop mode */}
        <button className='lg:hidden'  
          aria-label='btnMobile'
          onClick={() => {
          setMovileNav(!mobileNav)
        }}>
          {mobileNav ? (
            <HiOutlineX className='text-4xl text-[#e49250]' />
          ) : (
            <HiMenu className='text-4xl text-[#e49250]' />
          )}
        </button>
        {/** mobile nav - hidden on desktop **/}
        <div
          className={`
              ${mobileNav
              ? 'left-0'
              : '-left-full'}
              fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all bg-[#e49250] duration-500   
           `}
        >
          <MobileNav  onMobileNavClick={handleMobileNavClick}/>
        </div>
      </div>
    </header>
  )
}

export default Header