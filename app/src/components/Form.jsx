import React from 'react';
import loadingGif from './loadingGif.gif';
import './Form.css';

export default function () {

	
	return	<div className="container">
  			<form>
			    <div className="form-group row">
			      <label for="inputUsername3" className="col-sm-2 col-form-label">Username</label>
			      <div className="col-sm-10">
			        <input type="username" className="form-control" id="inputUsername" placeholder="Username"></input>
			      </div>
			    </div>
			    <div className="form-group row">
			      <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
			      <div className="col-sm-10">
			        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
			      </div>
			    </div>
			    <div className="form-group row">
			      <div className="offset-sm-2 col-sm-10">
			        <button type="submit" className="btn btn-primary">Sign in</button>
			      </div>
			    </div>
			  </form>
		</div>

	
}

