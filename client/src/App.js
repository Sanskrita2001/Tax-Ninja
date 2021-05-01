import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Helper from './UI/Helper';
import Savings from './components/Savings/Savings';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import Investment from "./components/Investments.js/Investment"
import AuthState from './Context/auth/AuthState';

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        {/* <Helper /> */}
        <Switch>
          <Route className='Login' exact path='/' component={Login} />
          <Route className='signup' exact path='/signup' component={SignUp} />
          <Route exact path='/dummy' component={Helper}></Route>
		  <Route exact path='/savings' component={Savings}></Route>
					<Route exact path='/investments' component={Investment}></Route>
        </Switch>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
