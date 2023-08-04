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
    <>
      <div className=' pt-20 flex flex-col items-center max-w-7xl min-h-[900px] bg-gray-300 p-5'>
        <div className='container'>
          <Swiper {...sliderSettings}>
            {images.map((image, imageIndex) => {
              const { ruta } = image;
              return (
                <SwiperSlide key={imageIndex}>
                  <div className='max-h-[350px] max-w-sm'>
                    <img src={ruta} alt="ImagenSlider" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='bg-gray-700 rounded-md p-2 text-white shadow-lg'>
          <h1 className='font-extrabold text-2xl'>{title}</h1>
          <p className=''>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
