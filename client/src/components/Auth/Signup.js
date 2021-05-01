import React, { useContext, useState , useEffect} from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import authContext from '../../Context/auth/authContext';

const SignupPage = (props) => {
  const authcontext = useContext(authContext)

  const {registerUser, error, isAuthenticated} = authcontext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dummy');
    }
    if (error) {
      alert(error)
    }
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    name: '',
    email:'',
    role:'',
    password:''
  })

  const {name, email, role, password} = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();

    registerUser({
      name,
      email,
      role,
      password,
    });
    console.log(user)
  };
 
 
  return (
    <div className='signup'>
      <h1
        className='Signup-head'
        style={{ fontFamily: 'Lucida Sans', color: '#4cbc8d', fontSize: '8em' }}
      >
        Signup Here
      </h1>
      <div
        className='signup-form'
        style={{
          width: '40%',
          textAlign: 'left',
          marginLeft: '25em',
          padding: '2em',
          border: '1px solid #4cbc8d',
        }}
      >
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} controlId='formHorizontalName'>
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10} xs='auto'>
              <Form.Control
                type='text'
                placeholder='Enter name'
                style={{ display: 'block', width: '100%' }}
                value={name}
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10} xs='auto'>
              <Form.Control
                type='email'
                placeholder='Enter email'
                style={{ display: 'block', width: '100%' }}
                value={email}
                onChange={onChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10} xs='auto'>
              <Form.Control
                type='password'
                placeholder='Enter password'
                style={{ display: 'block', width: '100%' }}
                value={password}
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as='legend' column sm={2}>
                Role
              </Form.Label>
              <Col sm={10} xs='auto'>
                <Form.Check
                  type='radio'
                  label='service'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios1'
                  style={{ display: 'block', width: '100%' }}
                  value={role}
                  onChange={onChange}
                />
                <Form.Check
                  type='radio'
                  label='business'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios2'
                  style={{ display: 'block', width: '100%' }}
                  value={role}
                  onChange={onChange}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }} xs='auto'>
              <Button type='submit'>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
