import Footer from "./Footer"
import LoginButton from "./Login"
import logo from './aboutLogo.png'
import '../components/css/About.css'
import React from "react"
const About = ()=>{



    return (<React.Fragment >
        <div id = "About">
    <br/>
    <LoginButton/>
    <img src={logo} id="logo"/>
    </div>
    </React.Fragment>)

}

export default About