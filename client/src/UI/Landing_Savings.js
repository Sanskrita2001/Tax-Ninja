import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bunny from '../images/Peace Bunny.svg';

const LandingSaving=()=>{
    return(
       <div className="landing" style={{background:"linear-gradient(#4CBC8D,#215F44)",paddingTop:"5em",
       display:"block",width:"100%", backgroundColor:"#4CBC8D"}}>
          <Container fluid="md">
              <Row>
                <Col><img src={Bunny} alt="bunny" style={{width:"15em"}}/>
                </Col>
                <Col xs={8}>
                  <div className="landing-text">
                    <div>
                    <p className="l-text1" style={{fontSize:"4em",color:"white"}}>Savings</p>
                    <p className="l-text1" style={{fontSize:"2.8em"}}>Budget For Your Savings</p>
                    <p className="l-text2" style={{ fontSize:"2.8em"}}>Decide on Your Priorities</p>
                    <p className="l-text2" style={{ fontSize:"2.8em"}}>Watch Your Savings Grow!</p>
                    </div>
                    <div style={{margin:"3em 0"}}>
                      <span><button style={{width:"15em", fontSize:"1.2em", height:"3em", borderRadius:"1em", border:"2px solid black", backgroundColor:"transparent",color:"white"}}><Link to='/savings'style={{textDecoration:"none",color:"white"}}>Start Saving</Link></button></span>
                    </div>
                  </div>
                </Col>
              </Row>
          </Container> 
       </div>
    );
  }

export default LandingSaving;