import React from 'react';
import LoginPage from '../src/components/Login';
import SignupPage from '../src/components/Signup';
import NavbarComp from '../src/UI/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Helper from './UI/Helper';
import Savings from './components/Savings/Savings';

function App() {
	return (
		<>
			<BrowserRouter>
				<Helper />
				<Switch>
					{/* <Route className='Login' exact path='/' component={LoginPage} />
					<Route
						className='signup'
						exact
						path='/signup'
						component={SignupPage}
					/> */}
				</Switch>
			</BrowserRouter>
			<Savings/>
		</>
	);
}

export default App;
