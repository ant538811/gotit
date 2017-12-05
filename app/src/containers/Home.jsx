import React, {Component} from 'react';
import Navbar from './components/Navbar.jsx';
import Buttongroup from './components/Buttongroup.jsx';
import Form from './components/Form.jsx';

import MasterCSS from 'MasterCSS.css';



class Home extends Component {
	render() {
		return (
			<div className ="Home">
				<div className = "container">
					<h1> Please Clock In </h1>
					<Buttongroup />
					<Form />
				</div>
			</div>


		);
	}
	
}


export default Home;