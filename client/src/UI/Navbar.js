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
					<Navbar.Brand href='#home'>Tax-Ninja</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav>
							<Nav.Link>
								<Link to='/savings'>Savings</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to='/investments'>Investments</Link>
							</Nav.Link>
							<Nav.Link href='#'>Profile</Nav.Link>
							<Nav.Link href='#'>Logout</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
}

export default NavbarComp;