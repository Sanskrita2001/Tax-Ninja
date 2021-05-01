import React, { useEffect, useState } from 'react';
import SignupPage from '../src/components/Signup';
<<<<<<< HEAD

=======
import NavbarComp from '../src/UI/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Helper from './UI/Helper';
import Savings from './components/Savings/Savings';
>>>>>>> ac6d6d99fc4a9819d211711e2f339248e0dafdca

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
