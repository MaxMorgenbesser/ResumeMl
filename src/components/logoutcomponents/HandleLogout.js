// import  Nav from "react-bootstrap/Nav"
import{ Button }from "antd"
import { Link } from 'react-router-dom';

export default function HandleLogout(){
return (<><Link as={Link} to='/' ><Button>Logout</Button>
</Link></>)
}

