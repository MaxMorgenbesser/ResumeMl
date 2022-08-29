import  Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import React from "react";
import './css/Navbar.css'
import HandleLogout from "./logoutcomponents/HandleLogout";


const Navbar=()=>{
    return(<React.Fragment >
        
    <Nav variant="pills" id="navbar">
    <Nav.Item>
    <Link as={Link} to='/Post' ><Button>Enter your resume</Button>
    </Link>
    </Nav.Item>
    <Nav.Item>
    <Link as={Link} to='/score' ><Button>Score others!</Button>
    </Link>
    </Nav.Item>
    <Nav.Item>
    <Link as={Link} to='/topfive' ><Button>Top Five Resumes!</Button>
    </Link>
    </Nav.Item>
    <Nav.Item>
    <HandleLogout/>
    </Nav.Item>
    </Nav>
     </React.Fragment>)
}
export default Navbar