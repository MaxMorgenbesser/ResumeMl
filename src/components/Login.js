import { data } from "../App"
import { useContext } from "react"
import { Link } from 'react-router-dom';


const Login=()=>{
    const {Loggedin, setLoggedin}=useContext(data)
return(<nav>
  
    <Link as = {Link} to ='/post'>
        <button onClick={()=>setLoggedin(true)}>
        Login</button>
        </Link>

    </nav>)

}

export default Login