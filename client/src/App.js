import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Helper from './UI/Helper';
import Savings from './components/Savings/Savings';
import Investment from './components/Investments.js/Investment';

function App() {
	return (
		<>
			<BrowserRouter>
				<Helper />
				<Switch>
					<Route exact path='/savings' component={Savings}></Route>
					<Route exact path='/investments' component={Investment}></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
