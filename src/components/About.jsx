import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { about } from '../../data';

const About = () => {
  const { title, section } = about;

  // Configuración del swiper
  const swiperSettings = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className='section flex flex-col justify-center items-center w-screen min-h-[900px] bg-gray-400 p-5'>
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <Swiper {...swiperSettings}>
        {section.map((section, sectionIndex) => {
          const { subTitle, text } = section;
          return (
            <SwiperSlide key={sectionIndex}>
              <div className="p-4 border-orange-500 bg-blue-950 rounded text-white shadow-md">
                <h2 className="text-xl font-semibold mb-2">{subTitle}</h2>
                <p className="text-sm">{text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;
