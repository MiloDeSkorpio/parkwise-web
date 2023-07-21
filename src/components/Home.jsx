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
      <div className='section flex flex-col items-center w-full min-h-[900px] bg-gray-200 p-5'>
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
        <h1 className='text-black font-extrabold text-2xl'>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Home;
