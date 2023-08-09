import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { about } from '../../../data';

const About = () => {
  const { title, section } = about;

  // Configuración del slider
  const sliderSettings = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className='flex flex-col items-center p-5'>
      <div className="container">

        <Swiper {...sliderSettings}>
          {section.map((section, sectionIndex) => (

              <SwiperSlide key={sectionIndex}>
                <div className="p-4 border-orange-500 bg-blue-950 rounded text-white shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{section.subTitle}</h2>
                  <p className="text-sm">{section.text}</p>
                </div>
              </SwiperSlide>

          ))}
        </Swiper>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
    </div>
  );
};

export default About;
