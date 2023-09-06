import React from "react";
import './../style/components/menu.css';

const Menu = ({data}) => {

  
    

    return (
      
            
                    <div  className="menu_item">
                        <img src={data.image} alt={data.name}     className="menu_item_image" />
                        <h3 className="menu_item_name">{data.name}</h3>
                        <p className="menu_item_price">{data.price}</p>
                    </div>
                
           
      
    );
};

export default Menu;
