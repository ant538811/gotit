import React, {Component} from 'react';
import Navbar from './components/Navbar.jsx';
import Buttongroup from './components/Buttongroup.jsx';




class Home extends Component {
	render() {
		return (
			<div className ="Home">
				<Navbar />
				<Buttongroup />

			</div>


		);
	}
	
}


export default Home;