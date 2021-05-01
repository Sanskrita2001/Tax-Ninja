import React, { useState, useContext ,useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../Context/auth/authContext';

const LoginPage = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;
  
  const [user, setUser] = useState({
		email: '',
		password: '',
  });
  const { email, password } = user;
	const onChange = (e) =>
		setUser({ ...setUser, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Login Submit');
	};
  
return (
	<div className='login'>
		<h1
			className='login-head'
			style={{ fontFamily: 'Lucida Sans', color: '#4cbc8d' }}
		>
			Login Here
		</h1>
		<div
			className='login-form'
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
						placeholder='Enter email'
						value={email}
						onChange={onChange}
					/>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						value={password}
						onChange={onChange}
					/>
				</Form.Group>
				{/* <Form.Group controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group> */}
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	</div>
);
}

export default LoginPage;