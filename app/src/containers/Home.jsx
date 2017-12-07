import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Buttongroup from '../components/Buttongroup.jsx';
import Form from '../components/Form.jsx';
import loadingGif from '../components/loadingGif.gif';

import MasterCSS from './MasterCSS.css';



class Home extends Component {
	render() {
		return (

			<div className ="Home">

			<header className="App-header">
          <img src={loadingGif} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME TO YOUR WORKFORCE</h1>
        </header>

        <br/><br/>
        <br/><br/>
				<div className = "container">
					<h1> Please Sign In </h1> <br/> 
					<Form />
					<hr/>
					<h1> Quicklinks </h1>
					<br/>
					<Buttongroup />
				</div>
			</div>


		);
	}
	
}


export default Home;