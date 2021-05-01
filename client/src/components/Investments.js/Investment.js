import React,{useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"
import MutualFund from "./MutualFund";

import {
	Form,
} from 'react-bootstrap';
const Investment = () => {
	// salary === rate
	// netassetvalue = hra

	const fetchData = async() => {
		try {
			if(salary !== 0 && hra !== 0){
                const {data} = await axios.get(`http://localhost:5000/api/mutualfund?rate[$gt]=${salary}&netAssetValue=${hra}`)
				setDatae(data)
			} else if(salary !==0 && hra === 0){
                const {data} = await axios.get(`http://localhost:5000/api/mutualfund?rate[$gt]=${salary}`)
				setDatae(data)
			} else if(salary ===0 && hra !== 0){
				const {data} = await axios.get(`http://localhost:5000/api/mutualfund?netAssetValue=${hra}`)
				setDatae(data)
			}
			
		} catch (err) {
			
		}
	}

	useEffect(()=>{
        fetchData();
	}, [])
	const [datae, setDatae] = useState([])
    const [salary, setSalary] = useState(0);
    const [hra, setHra] = useState(0);
    const handleChangeSalary = (e) => setSalary(e.target.value);
    const handleChangeHra = (e) => setHra(e.target.value);
	console.log(salary)
    return (
			<div className='container' style={{ marginTop: '5%' }}>
				<h2>Please fill the fields applicable for you:</h2>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<Form.Group controlId='salary'>
							<Form.Label style={{ color: '#2D8D64' }}>
								Enter the rate of interest you wanna risk.
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
								enter the minimum value of the fund you wanna search for
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='House Rent Allowance(HRA)'
								value={hra}
								name={hra}
								onChange={handleChangeHra}
							/>
						</Form.Group>
					</div>
				</div>
				<Link className="btn btn-success text-center" to='/mutualfunds' component={MutualFund}/>
			</div>
		);
}

export default Investment
