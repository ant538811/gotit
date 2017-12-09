import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loadingGif from './components/loadingGif.gif';

import Form from './components/Form.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Navbar from './components/Navbar.jsx';
import Buttongroup from './components/Buttongroup.jsx';
import Progressbar from './components/Progressbar.jsx';
import Panel from './components/Panel.jsx';


import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';

import Home from './containers/Home.jsx';
import Messages from './containers/Messages.jsx';
import Productivity from './containers/Productivity.jsx';
import Login from './containers/Login.jsx';
import Logout from './containers/Logout.jsx';

import routes from './routes.jsx';


class App extends Component {
  render() {
    return (

      <div className="App">


          <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/Productivity" component={Productivity} />
            <Route exact path="/Logout" component={Logout} />
          

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
