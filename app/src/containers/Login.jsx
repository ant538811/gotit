import React from 'react';
import Form from './components/Form.jsx';


class Login extends Component {
	render() {
		return (
			<div className = "Login">
				<div className = "container">
					<h1> Please Clock In </h1>
					<Buttongroup />
					<Form />
				</div>

			</div>
		);
	}
	
}

export default Login;