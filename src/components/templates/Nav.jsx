import {React, useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { nav } from '../../../data';

const Nav = () => {
  const location = useLocation();
  const [isActive, setisActive] = useState(false);
    //scroll event 
    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setisActive(true) : setisActive(false)
      })
    })
  return (
    <div className={`
    ${isActive
      ? 'bg-white shadow-2xl'
      : 'lg:top-[0px]'}
    py-6 lg:py-0 fixed w-full transition-all z-10 h-[80px] 
    `}>
      <ul className='h-full flex flex-row justify-center items-center gap-x-8'>
        {nav.map((item, index) => {
          const { href, name } = item;
          const isActive = location.pathname === href; // Verificar si la ruta actual coincide con la ruta del enlace
          return (
            <li key={index} className={`hover:bg-orange-500 hover:shadow-md p-1 rounded-sm ${isActive ? 'bg-orange-500 shadow-md' : ''}`}>
              <NavLink to={href}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
