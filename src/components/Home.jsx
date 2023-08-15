import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { home } from '../../data.js';


const Home = () => {
  const { p1, p2, p3, title, images } = home;

  // Configuración del slider
  const sliderSettings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    }
  };

  return (
    <div className='pt-20 flex flex-col h-full w-full items-center bg-white'>
      <h1 className='font-extrabold text-2xl'>{title}</h1>
      <div className='h-44 w-full overflow-hidden p-2'>
        <Swiper
          slidesPerView={1}
          autoplay={{delay:5000}}
          pagination={{ clickable: true }}
          loop={true}
        >
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
      {p1.map((p1, index) => {
        const { text } = p1;
        return (
          <div key={index} className='p-1'>
            <p>{text}</p>
          </div>
        );
      })}
      {p2.map((p2, index) => {
        const { text } = p2;
        return (
          <div key={index} className='p-1'>
            <p>{text}</p>
          </div>
        );
      })}
      {p3.map((p3, index) => {
        const { text } = p3;
        return (
          <div key={index} className='p-1'>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
