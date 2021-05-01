import React,{useState} from 'react'
import {
	Form,
} from 'react-bootstrap';
const Investment = () => {
    const [salary, setSalary] = useState(0);
    const [hra, setHra] = useState(0);
    const [lta, setLta] = useState(0);
    const handleChangeSalary = (e) => setSalary(e.target.value);
    const handleChangeHra = (e) => setHra(e.target.value);
    const handleChangeLta = (e) => setLta(e.target.value);
    return (
			<div className='container' style={{ marginTop: '5%' }}>
				<h2>Please fill the fields applicable for you:</h2>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<Form.Group controlId='salary'>
							<Form.Label style={{ color: '#2D8D64' }}>
								Gross Annual Salary
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='Gross Annual Salary'
								value={salary}
								name={salary}
								onChange={handleChangeSalary}
							/>
						</Form.Group>
						<Form.Group controlId='hra'>
							<Form.Label style={{ color: '#2D8D64' }}>
								House Rent Allowance(HRA)
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='House Rent Allowance(HRA)'
								value={hra}
								name={hra}
								onChange={handleChangeHra}
							/>
						</Form.Group>
						<Form.Group controlId='hra'>
							<Form.Label style={{ color: '#2D8D64' }}>
								House Rent Allowance(HRA)
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='Leave Travel Allowance(LTA)'
								value={lta}
								name={lta}
								onChange={handleChangeLta}
							/>
						</Form.Group>
					</div>
				</div>
			</div>
		);
}

export default Investment
