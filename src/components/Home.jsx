import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { home } from '../../data.js';

const Home = () => {
  const { text,text2,text3, title, images } = home;

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
      <div className='pt-20 flex flex-col h-full w-full items-center bg-white'>
        <div className='h-44 w-full overflow-hidden p-2'>
          <Swiper {...sliderSettings}>
            {images.map((image, imageIndex) => {
              const { ruta } = image;
              return (
                <SwiperSlide key={imageIndex}>
                  <div className='h-full object-cover'>
                    <img src={ruta} alt="ImagenSlider" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='p-2 mt-10'>
          <h1 className='font-extrabold text-2xl'>{title}</h1>
          <p className=''>{text}</p>
          <div>
            <p>{text2}</p>
          </div>
          <div>
            <p>{text3}</p>
          </div>
        </div>
      </div>
      );
};

export default Home;
