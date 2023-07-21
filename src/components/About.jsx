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
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <Swiper {...swiperSettings}>
        {section.map((section, sectionIndex) => {
          const { subTitle, text } = section;
          return (
            <SwiperSlide key={sectionIndex}>
              <div className="p-4 border rounded shadow-md">
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
