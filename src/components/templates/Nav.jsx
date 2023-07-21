import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { nav } from '../../../data';

const Nav = () => {
  const location = useLocation();

  return (
    <div className='bg-white w-full h-full'>
      <ul className='h-full flex flex-row justify-center items-center gap-x-8'>
        {nav.map((item, index) => {
          const { href, name } = item;
          const isActive = location.pathname === href; // Verificar si la ruta actual coincide con la ruta del enlace
          return (
            <li key={index} className={`hover:bg-[#d1ae6c] hover:shadow-md p-1 rounded-sm ${isActive ? 'bg-[#d1ae6c] shadow-md' : ''}`}>
              <NavLink to={href}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
