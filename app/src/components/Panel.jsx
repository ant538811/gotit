import React from 'react';
import './Panel.css';

export default function () {
	
	
	return 	<div className = "col-md-8">
	<div className="panel panel-default">
				<div className="panel-heading">Welcome Justin!</div>
				<div className="panel-body">
				   <p>Here is your homepage. Choose which information you would like to view or edit.</p>
				</div>


				  <table className="table text-center">
				   	<tr>
					    <th>User ID</th>
					    <th>Name</th>
					    <th>Role</th>
					    <th>Teams</th>
					  </tr>
					  <tr>
					    <td>#19090909</td>
					    <td>Justin Lubos</td>
					    <td>Front End Developer</td>
					    <td>Got It!, Kites N Flights, Fan Fav</td>
					  </tr>
					</table>
				</div>
				</div>;

}

