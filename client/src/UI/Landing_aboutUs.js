import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Bunny from '../images/bunny.png';

const LandingAbout=()=>{
    return(
       <div className="landing" style={{background:"linear-gradient(#4CBC8D,#215F44)",paddingTop:"5em",
       display:"block",width:"100%", backgroundColor:"#4CBC8D"}}>
          <Container fluid="md">
              <Row>
                <Col><img src={Bunny} alt="bunny" style={{width:"20em"}}/>
                </Col>
                <Col xs={8}>
                  <div className="landing-text">
                    <div>
                    <p className="l-text1" style={{fontSize:"4em",color:"white"}}>About Us</p>
                    <p className="l-text1" style={{fontSize:"2.8em"}}>Budget For Your Savings</p>
                    <p className="l-text2" style={{ fontSize:"2.8em"}}>Decide on Your Priorities</p>
                    <p className="l-text2" style={{ fontSize:"2.8em"}}>Watch Your Savings Grow!</p>
                    </div>
                  </div>
                </Col>
              </Row>
          </Container> 
       </div>
    );
  }

export default LandingAbout;