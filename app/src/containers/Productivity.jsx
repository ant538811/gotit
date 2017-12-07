import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Progressbar from '../components/Progressbar.jsx';

import MasterCSS from './MasterCSS.css';

class Productivity extends Component {
	render() {
		return (
			<div className ="Productivity">
				<Navbar />
				<Progressbar />

			</div>
		);

	}


}

export default Productivity;