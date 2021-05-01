import React from 'react';
// import LoginPage from '../src/components/Login';
// import SignupPage from '../src/components/Signup';
import NavbarComp from '../src/UI/Navbar';
import Landing from '../src/UI/Landing';
import LandingSaving from '../src/UI/Landing_Savings';
import LandingInvestment from '../src/UI/Landing_Investments';
import LandingAbout from '../src/UI/Landing_aboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Helper from './UI/Helper';
import Savings from './components/Savings/Savings';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import Dummy from './components/Dummy';
import AuthState from './Context/auth/AuthState';

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Helper />
        <Switch>
          <Route className='Login' exact path='/' component={Login} />
          <Route className='signup' exact path='/signup' component={SignUp} />
          <Route exact path='/savings' component={Savings}></Route>
          <Route exact path='/dummy' component={Helper}></Route>
        </Switch>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
