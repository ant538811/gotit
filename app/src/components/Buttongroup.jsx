import React from 'react';
import './Buttongroup.css';


export default function () {
	
  return		<div className="btn-group btn-group-justified" role="group" aria-label="...">
  			<div className="btn-group" role="group">
    			<button type="button" className="btn btn-default">Clock In</button>
  			</div>
  			<div className="btn-group" role="group">
    			<button type="button" className="btn btn-default">Clock Out</button>
  			</div>
  			<div className="btn-group" role="group">
    			<button type="button" className="btn btn-default">Lunch Start</button>
  			</div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">Lunch End</button>
        </div>
		</div>;


}
