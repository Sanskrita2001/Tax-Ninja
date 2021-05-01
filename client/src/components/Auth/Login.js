import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../../Context/auth/authContext';
//import Bunny from '../../images/Peace Bunny.svg';
const LoginPage = (props) => {
  const authContext = useContext(AuthContext);

  const { loginUser, error, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dummy');
    }
    if (error) {
      setErrorMessage(error);
    }
  }, [error, isAuthenticated, props.history]);

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser({
      email,
      password,
    });
  };

  return (
    <div className='login'>
      
      <h1 className='login-head' style={{ marginTop:"3em",textAlign:"center",color: '#4cbc8d' }}>
        Login Here
      </h1>
      <div className='login-form'
        style={{
          width: '40%',
          textAlign: 'left',
          marginLeft: '25em',
          padding: '2em',
          border: '1px solid #4cbc8d',
        }}
      >
        
        <Form onSubmit={onSubmit}>
          <Form.Group controlId='formBasic'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              value={email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        </div>
        </div>    
  );
};

export default LoginPage;
