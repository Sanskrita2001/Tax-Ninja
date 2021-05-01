import React from 'react'
import { Accordion,Card,Button } from 'react-bootstrap';
const Savings = () => {
    return (
			<div className='savings'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<h1 style={{ color: '#093321' }}>Start Saving</h1>
							<Accordion>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant='link' eventKey='0'>
											Click me!
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey='0'>
										<Card.Body>Hello! I'm the body</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant='link' eventKey='1'>
											Click me!
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey='1'>
										<Card.Body>Hello! I'm another body</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Savings
