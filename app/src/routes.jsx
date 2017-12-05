import React from 'react';
import {Route, IndexRoute} from 'react-router';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import App from './containers/App';
import App from './containers/Home';
import App from './containers/messages';
import App from './containers/productivity';
import App from './containers/login';
import App from './containers/logout';




export default () => {
	return
		<Route path ="/" component = {App}/>
		<Route path ="/home" component = {Home}/>
		<Route path ="/messages" component = {Messages}/>
		<Route path ="/productivity" component = {Productivity}/>
		<Route path ="/login" component = {Login}/>
		<Route path ="/logout" component = {LogOut}/>
	</Route>



}
