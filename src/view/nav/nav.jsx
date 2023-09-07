import React, { useState, useEffect } from "react";

import Menu from "../../components/menu";
import { fetchMenuData } from "../../services/nav/menu";
import axios from 'axios';
import './../../style/nav/nav.css'


const Nav = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const menuData = await fetchMenuData();
          setData(menuData);
        };
    
        fetchData();
      }, []);

    const itemsPerPage = 8;
    const totalItems = data ? data.length : 0;

    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };

    const showMoreButton = visibleItems < totalItems;

    return <>
        <div className="nav_container" id='nav'>

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