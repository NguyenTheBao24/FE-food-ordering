import React, { useState } from "react";

import Menu from "../../components/menu";
import './../../style/nav/nav.css'


const Nav = () => {
    const data = [


        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        }, {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        }, {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        }, {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
        {
            image: 'https://launamgiakhanh.vn/wp-content/uploads/2019/07/39ab4115a93763693a26-1024x683-1.jpg',
            name: 'Combo 6 người',
            price: '1519000Đ'
        },
    ];
    const itemsPerPage = 8;
    const totalItems = data.length;

    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };

    const showMoreButton = visibleItems < totalItems;

    return <>
        <div className="nav_container">

            <div className="container_titel">
                <div className="container_box"></div>
                <div className="container_tiltel_lite">
                    <p>  MENU </p>
                </div>
                <div className="container_box"></div>
            </div>

            <div className="nav">
                {data.slice(0, visibleItems).map((item, index) => (
                    <div key={index} className="menu">
                        <Menu data={item} />
                    </div>
                ))}

            </div>
            <div className="menu_btn">
                {showMoreButton ? (
                    <div className="show_more_btn" onClick={loadMoreItems}>
                        Hiển thị thêm
                    </div>
                ) : (
                    <div className="show_less_btn" onClick={() => setVisibleItems(itemsPerPage)}>
                        Thu gọn
                    </div>
                )}
            </div>
        </div>

    </>
}
export default Nav