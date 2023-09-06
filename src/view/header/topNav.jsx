import { useState, useEffect } from "react"
import './../../style/header/topNav.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './../../asstes/images/logo.png'
import anh1 from './../../asstes/images/anh1.jpg'
import { BiTime } from "react-icons/bi"
import { FaPhone } from "react-icons/fa"
// import '../../components/button'
import '../../components/booknow/booknow'
import BookNow from '../../components/booknow/booknow.jsx';



function Topnav() {
    const [showPopUp, setPopup] = useState(false)

    const handlShowPopUp = () => {
        setPopup(true)
    }
    const handleClosePopUp=()=>{
        setPopup(false)
    }

    return <>
        <div className="topNav">


            <div>

                <img className="topNav_logo" src={logo} alt="" />
            </div>


            <div className="topNav_contact">
                <ul className="topnav_contact_ul">

                    <li><div className="topNav_time">


                        <BiTime className="logo_time"></BiTime>
                        <p> 09:00am-05:00pm</p>
                    </div></li>

                    <li>
                        <div className="topNav_phone">

                            <FaPhone className="logo_phone" ></FaPhone>
                            <a href=""> <p className="topNav_std"> +84869346831</p></a>
                        </div>
                    </li>
                </ul>


                <div className="topNav_btn">
                    <div className="btn topNav_btna" onClick={handlShowPopUp}>Book Now</div>
                </div>
                {showPopUp && <BookNow onClose={handleClosePopUp} />}

            </div>

        </div>
    </>

}

export default Topnav