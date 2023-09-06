import React from 'react'
import { NavLink } from 'react-router-dom';
//import data
import { nav } from '../../../data';
const MobileNav = ({ onMobileNavClick }) => {
  return (
    <div className='bg-[#e49250] w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, index) => {
          //destrucure item
          const { href, name } = item
          const isActive = location.pathname === href
          return (
            <li key={index} className={`hover:bg-blue-950 hover:shadow-md hover:text-white p-3 rounded-md ${isActive ? 'bg-blue-950 text-white shadow-md' : ''}`}>
              <NavLink to={href} onClick={() => {
                onMobileNavClick(); // Llamar a la función de Header
              }}>{name}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileNav