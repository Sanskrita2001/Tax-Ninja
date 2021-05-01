import React, { useEffect, useState } from 'react';
import LoginPage from '../src/components/Login';
import SignupPage from '../src/components/Signup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Intro
      </header>
      <div className="Login">
          <LoginPage/>
          <SignupPage/>
      </div>
    </div>
  );
}

export default App;
