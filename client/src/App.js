import React from 'react';
import LoginPage from '../src/components/Login';
import SignupPage from '../src/components/Signup';
import NavbarComp from '../src/UI/Navbar';
import Landing from '../src/UI/Landing';
import LandingSaving from '../src/UI/Landing_Savings';
import LandingInvestment from '../src/UI/Landing_Investments';
import LandingAbout from '../src/UI/Landing_aboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Helper from './UI/Helper';

function App() {
  return (
	<div className="app">
		<NavbarComp/>
		<Landing/>
		<LandingSaving/>
		<LandingInvestment/>
		<LandingAbout/>
	</div>);
      {/* <>
			<BrowserRouter>
				<Helper />
				<Switch>
					<Route className='Login' exact path='/' component={LoginPage} />
					<Route className='signup' exact path='/signup' component={SignupPage} />
				</Switch>
			</BrowserRouter>
		    
      </>
  */}
	
}

export default App;
