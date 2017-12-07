import React, {Component} from 'react';
import Form from '../components/Form.jsx';
import Buttongroup from '../components/Buttongroup.jsx';


import MasterCSS from './MasterCSS.css';

class Login extends Component {
	render() {
		return (
			<div className = "Login">
				<div className = "container">
					<h1> Please Sign In </h1> <br/> 
					<Form />
					<hr/>
					<h1> Quicklinks </h1>
					<Buttongroup />
				</div>

			</div>
		);
	}
	
}

export default Login;