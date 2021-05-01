import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
const NavbarComp=()=>{
    return(
        <div className="navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Tax-Ninja</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <Nav.Link href="#">Savings</Nav.Link>
            <Nav.Link href="#">Investments</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;