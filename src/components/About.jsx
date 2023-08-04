import React from 'react';
import AboutSwiper from './templates/AboutSwiper';
import { about } from '../../data'; // Importa tu data de 'about'

const About = () => {
  return (
    <div className='pt-20 h-screen items-center max-w-7xl  bg-gray-300 p-5'>
      {/* ... Otros contenidos */}
      <AboutSwiper about={about} />
      {/* ... Otros contenidos */}
    </div>
  );
};

export default About;
