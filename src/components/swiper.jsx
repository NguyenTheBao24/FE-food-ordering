import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './../style/components/swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SwiperCardCarousel = ( {cards}) => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-card"
            style={{
              backgroundImage: `url(${card})`,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCardCarousel;
