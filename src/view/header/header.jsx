import React from "react"
import Topnav from "./topNav"
import BotNav from "./botNav"
import Example from "./example"
import './../../style/header/header.css'
import Body from './../body/body';
import Nav from './../nav/nav';
import Food from './../food/Food';


function Header() {
    return <>



        <Topnav />
        <BotNav />
        <Example></Example>
        <Body></Body>
        <Nav></Nav>
        <Food></Food>


    </>
}
export default Header