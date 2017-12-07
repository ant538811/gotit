import React from 'react';
import loadingGif from './loadingGif.gif';
import { Link } from 'react-router-dom';
import './Jumbotron.css';




export default function () {

	
	return	<div className="jumbotron jumbotron-fluid">
		  <div className="container">
		    <h1 className="display-3">SEE YOU AGAIN!</h1>
		    <p className="lead">Succesfully logged out!</p>
		    <Link to ="/home"><i class="fa fa fa-handshake-o"></i></Link>
		  </div>
		</div>	
}


