import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { home } from '../../data.js';

const Home = () => {
  const { text, title, images } = home;

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
      <div className='pt-20 flex  h-full w-full items-center bg-white p-5'>
        <div className='h-44 w-full overflow-hidden py-3'>
          <Swiper {...sliderSettings}>
            {images.map((image, imageIndex) => {
              const { ruta } = image;
              return (
                <SwiperSlide key={imageIndex}>
                  <div className='h-full max-w-sm object-cover'>
                    <img src={ruta} alt="ImagenSlider" className='h-full w-full object-cover'/>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='bg-gray-700 rounded-md p-2 mt-20 text-white shadow-lg'>
          <h1 className='font-extrabold text-2xl'>{title}</h1>
          <p className=''>{text}</p>
        </div>
      </div>
      );
};

export default Home;
