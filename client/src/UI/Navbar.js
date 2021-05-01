import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Savings from '../components/Savings/Savings';
const NavbarComp=()=>{
    return (
			<div className='navbar'>
				<Navbar
					collapseOnSelect
					expand='lg'
					bg='dark'
					variant='dark'
					fixed='top'
				>
					<Navbar.Brand href='#home'>TaxNinja</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<div style={{marginRight:"2em"}}>
						<Nav>
							<Nav.Link>
                            <Link to='/savings' style={{textDecoration:"none"}}>Savings</Link>
							</Nav.Link>
							<Nav.Link href='#'>Investments</Nav.Link>
							<Nav.Link href='#'>Profile</Nav.Link>
							<Nav.Link href='#'>Logout</Nav.Link>
						</Nav>
						</div>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
}

export default NavbarComp;