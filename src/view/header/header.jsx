import React from "react"
import Topnav from "./topNav"
import BotNav from "./botNav"
import  Example  from "./example"


function Header(){
    return <>
    <Topnav/>
    <BotNav/>
    <Example></Example>

    </>
}
export default Header