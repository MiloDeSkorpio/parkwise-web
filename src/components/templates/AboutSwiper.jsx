import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { about } from '../../../data';

const About = () => {
  const { title, slider } = about;

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
      <div className="max-w-xs">
        <Swiper {...sliderSettings}>
          {slider.map((slider, sliderIndex) => (
              <SwiperSlide key={sliderIndex}>
                <div className="p-4 border-orange-500 bg-blue-950 rounded text-white shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{slider.subTitle}</h2>
                  <p className="text-sm">{slider.text}</p>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
