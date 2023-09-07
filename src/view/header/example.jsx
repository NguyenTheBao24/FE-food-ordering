import React, { useState, useEffect } from 'react';

import './../../style/header/example.css'
import SwiperCardCarousel from '../../components/swiper';



const Example = () => {
    const images = [
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/03.NamTuyetNhi-1.jpg',
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/08.NamHuongTuoi-1.jpg',
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/07.NamThuyTinhNau-1.jpg',
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/10.NamYen-1.jpg',
    ];

    return (
        
         <div className="thumbnail-slider">
           
                <SwiperCardCarousel cards={images}></SwiperCardCarousel>

        </div>
  
    

    );
};

export default Example;
