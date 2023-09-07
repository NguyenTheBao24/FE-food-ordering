import React from "react"
import './../../style/body/Body.css'
import SwiperCardCarousel from './../../components/swiper.jsx'

const Body = () => {
    const cards = [
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/03.NamTuyetNhi-1.jpg',
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/08.NamHuongTuoi-1.jpg',
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/07.NamThuyTinhNau-1.jpg',
        'https://launamgiakhanh.vn/wp-content/uploads/2021/12/10.NamYen-1.jpg',

    ];
    return <>
        <div className="container" id='body'>
            <div className="container_titel">
                <div className="container_box"></div>
                <div className="container_tiltel_lite">
                  <p>  KHUYẾN MÃI HÓT TRONG TUẦN </p>
                </div>
                <div className="container_box"></div>
            </div>


            <div className="container_card">
                <div className="container_card_1">

                <SwiperCardCarousel cards={cards} ></SwiperCardCarousel>
                </div>
                <div className="container_card_2">

                <SwiperCardCarousel cards={cards} ></SwiperCardCarousel>
                </div>
            </div>

        </div>


    </>
}

export default Body