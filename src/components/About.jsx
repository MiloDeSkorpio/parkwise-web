import React from 'react';
import AboutSwiper from './templates/AboutSwiper';
import { about } from '../../data'; // Importa tu data de 'about'

const About = () => {
  const { intro, info, footer, title } = about

  return (
    <div className='pt-20 flex flex-col h-full w-full items-center bg-white p-5'>
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <div className='p-1'>
        <h2>{intro.subTitle}</h2>
        <p>{intro.text}</p>
      </div>
      {/* ... Otros contenidos */}
      <AboutSwiper about={about} />
      {/* ... Otros contenidos */}
      <div className='p-1'>
        <h2>{info.subTitle}</h2>
        <p>{info.text}</p>
      </div>
      <div className='p-1'>
        <h2>{footer.subTitle}</h2>
        <p>{footer.text}</p>
      </div>
    </div>
    
  );
};

export default About;
