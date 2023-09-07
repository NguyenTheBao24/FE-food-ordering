import React from "react"
import './../../style/food/food.css'
import { FiPhone, FiFacebook } from 'react-icons/fi'
import { AiOutlineMail,AiOutlineUser } from 'react-icons/ai'



const Food = () => {
    return <div className="Food" id='food'>
        <div className="food_1">
            <p>CONTACT US</p>
            <ul>
                <li>   <FiPhone></FiPhone> +84869346831</li>
                <li> <AiOutlineMail></AiOutlineMail> anhbaonb24@gmail.com</li>
                <li>
                    <FiFacebook></FiFacebook> www.facebook.com
                </li>
            </ul>

        </div>
        <div className="food_2">
            <p>MEMBER</p>
            <ul>
                <li>   <AiOutlineUser></AiOutlineUser> Nguyễn Thế Bảo</li>
                <li> <AiOutlineUser></AiOutlineUser> Trần Đức Thịnh </li>
                <li>
                    <AiOutlineUser></AiOutlineUser> Đỗ Hoàng Hải
                </li>
            </ul>

        </div>

    </div>
}
export default Food