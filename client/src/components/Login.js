import React from 'react';
import {Form, Button} from 'react-bootstrap';

function LoginPage(){
return (
<div className="login" style={{width:"40%", textAlign:"left", marginRight:"40px"}}>
<Form>
  <Form.Group controlId="formBasic">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>80
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
);
}

export default LoginPage;