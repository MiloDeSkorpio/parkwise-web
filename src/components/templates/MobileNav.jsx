import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
//import data
import { nav } from '../../../data';
const MobileNav = () => {
  return (
    <div className='bg-[#d1ae6c] w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, index) => {
          //destrucure item
          const { href, name } = item
          return (
            <li key={index}>
              <NavLink to={href}>{name}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileNav