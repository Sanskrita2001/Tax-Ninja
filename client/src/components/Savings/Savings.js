import React, { useState } from 'react';
import {
	Accordion,
	Card,
	Button,
	Form,
	ListGroup,
	Modal,
} from 'react-bootstrap';
const Savings = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className='savings'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<h1 style={{ marginTop: '30%', color: '#093321' }}>Start Saving</h1>
						<Form.Group controlId='salary'>
							<Form.Control type='text' placeholder='Gross Annual Salary' />
							<Form.Text className='text-muted' style={{ color: '#2D8D64' }}>
								We'll never share your details with anyone else.
							</Form.Text>
						</Form.Group>
						<Accordion>
							<Card style={{ backgroundColor: '#2D8D64' }}>
								<Card.Header>
									<Accordion.Toggle
										className='text-light'
										as={Button}
										variant='link'
										eventKey='0'
									>
										Additional Income
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey='0'>
									<ListGroup variant='flush'>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Rental from Income
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Interests from Deposits
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Others
											</Button>
										</ListGroup.Item>
									</ListGroup>
								</Accordion.Collapse>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Rental from Income</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form.Group>
											<Form.Control type='text' />
										</Form.Group>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='secondary' onClick={handleClose}>
											Close
										</Button>
										<Button variant='primary' onClick={handleClose}>
											Save Changes
										</Button>
									</Modal.Footer>
								</Modal>
							</Card>
							<Card style={{ backgroundColor: '#2D8D64' }}>
								<Card.Header>
									<Accordion.Toggle
										className='text-light'
										as={Button}
										variant='link'
										eventKey='1'
									>
										Add Exemption
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey='1'>
									<ListGroup variant='flush'>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												House Rent Allowance
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Leave Travel Allowance
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Amount recieved from Gratuity
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Company Leased Car
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Coupons for Food
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Expenses for Telephone and Internet
											</Button>
										</ListGroup.Item>
									</ListGroup>
								</Accordion.Collapse>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Rental from Income</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form.Group>
											<Form.Control type='text' />
										</Form.Group>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='secondary' onClick={handleClose}>
											Close
										</Button>
										<Button variant='primary' onClick={handleClose}>
											Save Changes
										</Button>
									</Modal.Footer>
								</Modal>
							</Card>
							<Card style={{ backgroundColor: '#2D8D64' }}>
								<Card.Header>
									<Accordion.Toggle
										className='text-light'
										as={Button}
										variant='link'
										eventKey='2'
									>
										Add Deduction
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey='2'>
									<ListGroup variant='flush'>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												PF Contribution
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												ELSS
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Tuition fees of 2 children
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Life Insurance Premium for self,spouse,and kids
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												Investing in National Savings Certificate Schemes
											</Button>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button
												onClick={handleShow}
												style={{ width: '100%', backgroundColor: '#4CBC8D' }}
											>
												A 5-year term deposit
											</Button>
										</ListGroup.Item>
									</ListGroup>
								</Accordion.Collapse>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Rental from Income</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form.Group>
											<Form.Control type='text' />
										</Form.Group>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='secondary' onClick={handleClose}>
											Close
										</Button>
										<Button variant='primary' onClick={handleClose}>
											Save Changes
										</Button>
									</Modal.Footer>
								</Modal>
							</Card>
						</Accordion>
						<Button variant='dark' size='lg' block style={{ margin: '10% 0' }}>
							Calculate Tax
						</Button>
					</div>
					<div
						className='col-12 col-md-6'
						style={{
							backgroundColor: '#4CBC8D',
							marginTop: '10%',
							padding: '4%',
							borderRadius: '3%',
						}}
					>
						<h2 className='text-center'>Results</h2>
						<h5 className='text-white p-3'>Total Exemption:</h5>
						<h5 className='text-white p-3'>Total Deduction:</h5>
						<h5 className='text-white p-3'>Taxable Income:</h5>
						<h5 className='text-white p-3'>Your Savings:</h5>
                        <h5 className='text-white p-3'>Your Taxes:</h5>
						<Button variant='dark' size='lg' block style={{ margin: '5% 0' }}>
							Save the Scenario
						</Button>
						<Button variant='dark' size='lg' block style={{ margin: '2% 0' }}>
							Print as PDF
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Savings;
