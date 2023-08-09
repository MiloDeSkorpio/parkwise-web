import React from 'react';
import AboutSwiper from './templates/AboutSwiper';
import { about } from '../../data'; // Importa tu data de 'about'

const About = () => {
  return (
    <div className='pt-20 flex  h-full w-full items-center bg-white p-5'>
      {/* ... Otros contenidos */}
      <AboutSwiper about={about} />
      {/* ... Otros contenidos */}
    </div>
  );
};

export default About;
