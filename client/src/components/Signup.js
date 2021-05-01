import React from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
function SignupPage (){
return (
  <div className="signup">
  <h1 className="Signup-head" style={{fontFamily:"Lucida Sans", color:"#4cbc8d"}}>Signup Here</h1>
 <div className="signup-form" style={{width:"40%", textAlign:"left", marginLeft:"25em", padding:"2em", border:"1px solid #4cbc8d"}}>
  
   <Form>
   <Form.Group as={Row} controlId="formHorizontalName">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Enter name" />
    </Col>
  </Form.Group>
   <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Enter email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Enter password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Role
      </Form.Label>
      <Col sm={10}>
        <Form.Check type="radio" label="service" name="formHorizontalRadios"id="formHorizontalRadios1"
        />
        <Form.Check type="radio" label="business" name="formHorizontalRadios" id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
 </div>  
 </div>    
);
}

export default SignupPage;