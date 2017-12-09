import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Progressbar from '../components/Progressbar.jsx';
import Panel from '../components/Panel.jsx';
import Buttongroup from '../components/Buttongroup.jsx';

import MasterCSS from './MasterCSS.css';

class Productivity extends Component {
	render() {
		return (
			<div className ="Productivity">
				<Navbar />
				<Progressbar />
				<Panel />

				<hr/>
					<h1> Quicklinks </h1>
					<br/>
					<Buttongroup />

				

			</div>
		);

	}


}

export default Productivity;