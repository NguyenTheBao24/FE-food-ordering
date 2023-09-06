import React, { useState, useEffect } from 'react';
import anh1 from './../../asstes/images/anh1.jpg'
import anh2 from './../../asstes/images/anh2.jpg'
import anh3 from './../../asstes/images/anh3.jpg'
import './../../style/header/example.css'



const Example = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        anh1,
        anh2,
        anh3,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        
         <div className="thumbnail-slider">
            <div className="image-container">
                <img
                    src={images[currentImage]}
                    alt="Slider"
                    className="thumbnail-image"
                />
            </div>
        </div>
  
    

    );
};

export default Example;
