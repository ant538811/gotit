import React from 'react';
import './Progressbar.css';

export default function () {

	
	return	<div class="progress">
  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" style={{width: '40%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  	40% Complete
  </div>
  <div className="progress-bar progress-bar-danger progress-bar-striped " role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
  	30%</div>
  <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" style={{width: '30%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
	30%</div>

</div>

}