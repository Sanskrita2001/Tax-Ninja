import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bunny from '../images/bunny.png';
const Landing=()=>{
    return(
       <div className="landing" style={{background:"linear-gradient(#4CBC8D,#215F44)",paddingTop:"8em",
       display:"block",width:"100%", backgroundColor:"#4CBC8D"}}>
          <Container fluid="md">
              <Row>
                <Col xs={8}>
                  <div className="landing-text">
                    <div>
                    <p className="l-text1" style={{fontSize:"3.4em",color:"white"}}>Taking Care of Your Tax</p>
                    <p className="l-text1" style={{fontSize:"3.4em",color:"white"}}>So You Don't Have To!</p>
                    <p className="l-text2" style={{ fontSize:"2.2em"}}>Your Final Stop For Tax Consulting</p>
                    </div>
                    <div style={{margin:"3em 0"}}>
                      <span><button style={{width:"15em", fontSize:"1.2em", height:"3em", borderRadius:"1em", border:"2px solid black", backgroundColor:"black"}}><Link to='/savings'style={{textDecoration:"none",color:"white"}}>GET STARTED</Link></button></span>
                      <span><button style={{width:"15em", fontSize:"1.2em", height:"3em", borderRadius:"1em", marginLeft:"2em", border:"2px solid black", backgroundColor:"black"}}><Link to='/savings'style={{textDecoration:"none",color:"white"}}>ABOUT US</Link></button></span>
                    </div>
                  </div>
                </Col>
                <Col><img src={Bunny} alt="bunny" style={{width:"20em"}}/>
                </Col>
              </Row>
          </Container> 
       </div>
    );
  }

export default Landing;