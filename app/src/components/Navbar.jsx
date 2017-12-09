import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function () {
	
	
	return 	<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header ">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="/">Got It</a>
		    </div>

		    <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li> <Link to ="/">Home</Link></li>
		        <li> <Link to ="/productivity">Productivity</Link></li>
		        <li> <Link to ="/messages">Messages</Link></li>
		        <li> <Link to ="/logout">Log Out</Link></li>
		      </ul>

		    
		    </div>
		  </div>
		</nav>;

}

