import React from 'react';
import loadingGif from './loadingGif.gif';
import { Link } from 'react-router-dom';
import './Form.css';

export default function () {

	
	return	<div className="container">
	<div class="text-center">
  			<form>
			    <div className="form-group row has-success">
			      <label for="inputUsername3" className="col-sm-2 col-form-label">Username</label>
			      <div className="col-sm-10">
			        <input type="username" className="form-control" id="inputUsername" placeholder="Username"></input>
			        
			      </div>
			    </div>
			    <div className="form-group  row has-success">
			      <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
			      <div className="col-sm-10">
			        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
			      </div>
			    </div>
			    <div className="form-group row">
			      <div className="offset-sm-2 col-sm-10">
			        <Link to ="/productivity"><button type="submit" className="btn btn-primary ">Sign in</button></Link>
			      </div>
			    </div>
			  </form>
		</div> 
	</div>;

	
}



