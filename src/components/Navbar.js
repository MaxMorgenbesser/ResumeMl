import  Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import React from "react";
import './css/Navbar.css'

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
    <Link as={Link} to='/topfive' ><Button>Top Five Rssumes!</Button>
    </Link>
    </Nav.Item>
    <Nav.Item>
    <Link as={Link} to='/' ><Button>Signout</Button>
    </Link>
    </Nav.Item>
    </Nav>
     </React.Fragment>)
}
export default Navbar