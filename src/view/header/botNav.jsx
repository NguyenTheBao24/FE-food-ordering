import React from "react"
import { Link } from "react-router-dom"
import './../../style/header/botNav.css'
import { FaFacebookF, FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import { useState } from "react"

function BotNav() {
    const [clicked, setClicked] = useState(1);
    const handlClicked = (index) => {
        setClicked(index);
    };
    return <>
        <div className="BotNav">
            <ul className="BotNav_ul1" >
                <li className={clicked === 1 ? "focus" : ""} onClick={() => handlClicked(1)}>
                    <a href="#">

                        HOME
                    </a>

                </li>
                <li className={clicked === 2 ? "focus" : ""} onClick={() => handlClicked(2)}>
                    <a href="#body">
                        ABOUT US
                    </a>

                </li>
                <li className={clicked === 3 ? "focus" : ""} onClick={() => handlClicked(3)} >
                    <a href="#nav">

                        ROOMS
                    </a>
                </li>
                <li className={clicked === 4 ? "focus" : ""} onClick={() => handlClicked(4)}>
                    <a href="#food">

                        CONTACT US
                    </a>
                </li>
                <li className={clicked === 5 ? "focus" : ""} onClick={() => handlClicked(5)}>
                    <Link to="/Loginnv">
                        LOGIN
                    </Link>
                </li>


            </ul>
            <ul className="BotNav_ul2">

                <li>
                    <a href="https://www.facebook.com/bao250603" target="blank"><FaFacebookF></FaFacebookF></a>

                </li>
                <li>
                    <a href="https://web.telegram.org/" target="blank"><FaTelegramPlane></FaTelegramPlane>
                    </a>

                </li>
                <li>
                    <a href="https://www.instagram.com/" target="blank">
                        <FaInstagram></FaInstagram>
                    </a>
                </li>

            </ul>

        </div>

    </>
}
export default BotNav