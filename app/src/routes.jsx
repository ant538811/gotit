import React from 'react';
import {Route, IndexRoute} from 'react-router';
import { BrowserRouter as Router, Switch} from "react-router-dom";



import Home from './containers/Home.jsx';
import Messages from './containers/Messages.jsx';
import Productivity from './containers/Productivity.jsx';
import Login from './containers/Login.jsx';
import Logout from './containers/Logout.jsx';





export default () => {
	return<Router>
        	<div>
        		<Route exact path="/" component={Home} />
        		<Route exact path="/home" component={Home} />
        		<Route exact path="/messages" component={Messages} />
            <Route exact path="/productivity" component={Productivity} />
            <Route exact path="/logout" component={Logout} />
        		
        		

        	</div>
        </Router>;



}
