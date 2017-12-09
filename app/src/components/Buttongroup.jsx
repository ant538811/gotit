import React from 'react';
import './Buttongroup.css';
import { Link } from 'react-router-dom';


export default function () {
	
  return		<div className="btn-group btn-group-justified" role="group" aria-label="...">
  			<div className="btn-group" role="group">
    			<button type="button" className="btn btn-default">Clock In</button>
  			</div>
  			<div className="btn-group" role="group">
    			<Link to ="/logout"><button type="button" className="btn btn-default">Clock Out</button></Link>
  			</div>
  			<div className="btn-group" role="group">
    			<button type="button" className="btn btn-default">Lunch Start</button>
  			</div>
        <div className="btn-group" role="group">
          <Link to ="/logout"><button type="button" className="btn btn-default">Lunch End</button></Link>
        </div>
		</div>;


}
