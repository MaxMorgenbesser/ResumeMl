import Nav from "react-bootstrap/Nav";
import { Button, Descriptions, PageHeader, Statistic, Tabs } from "antd";
// import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import React from "react";
import "./css/Navbar.css";
import HandleLogout from "./logoutcomponents/HandleLogout";

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav variant="pills" id="navbar">
        <Nav.Item className="logo">
          <h2>Resu-mii</h2>
        </Nav.Item>
     <div className="guide">
        <Nav.Item>
          <Link as={Link} to="/postres">
            <Button type="Primary">Enter your resume</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link as={Link} to="/score">
            <Button>Score others!</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link as={Link} to="/research">
            <Button>Search for keywords!</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <HandleLogout />
        </Nav.Item>
        </div>
      </Nav>
    </React.Fragment>
   
  );
};
export default Navbar;
