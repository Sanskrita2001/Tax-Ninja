import React from 'react'
import Landing from './Landing'
import NavbarComp from './Navbar'
import LandingSaving from './Landing_Savings';
import LandingInvestment from './Landing_Investments';
import LandingAbout from './Landing_aboutUs';


const Helper = () => {
    return (
        <div>
            <NavbarComp />
            <Landing/>
            <LandingSaving/>
            <LandingInvestment/>
            <LandingAbout/>
        </div>
    )
}

export default Helper;
