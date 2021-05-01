import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Helper from './UI/Helper';
import Savings from './components/Savings/Savings';
import LandingAbout from './UI/Landing_aboutUs'
import Investment from './components/Investments/Investment';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import AuthState from './Context/auth/AuthState';

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Switch>
          <Route className='Login' exact path='/' component={Login} />
          <Route className='signup' exact path='/signup' component={SignUp} />
          <Route exact path='/savings' component={Savings}></Route>
		  <Route exact path='/investments' component={Investment}></Route>
          <Route exact path='/dummy' component={Helper}></Route>
		  <Route exact path='/about' component={LandingAbout}></Route>
        </Switch>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
