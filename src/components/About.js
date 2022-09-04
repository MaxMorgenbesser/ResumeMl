import Footer from "./Footer"
import LoginButton from "./Login"
import logo from './aboutLogo.png'
import '../components/css/About.css'
const About = ()=>{



    return (<>About page
    <br/>
    <LoginButton/>
    <img src={logo} id="logo"/>
    <Footer/>
    </>)

}

export default About