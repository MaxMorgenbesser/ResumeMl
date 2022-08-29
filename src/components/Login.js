import { data } from "../App"
import { useContext, useState } from "react"
import { Link } from 'react-router-dom';
// import Login from "./landingpagecomponents/LoginForm";
import LoginForm from "./landingpagecomponents/LoginForm";
import Modal from "antd/lib/modal/Modal";
import { Button } from "antd";

const Login=()=>{
const {Loggedin, setLoggedin}=useContext(data)
const {modal,setModal}=useState(false)

return(<nav>
<Link as={Link} to='/Post' ><Button>Login</Button>
    </Link>
    </nav>)

}

export default Login