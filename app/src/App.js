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
import Messages from './containers/Home.jsx';
import Productivity from './containers/Home.jsx';
import Login from './containers/Home.jsx';
import Logout from './containers/Home.jsx';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={loadingGif} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME TO YOUR WORKFORCE</h1>
        </header>

        <br/><br/>
        <br/><br/>
        
        <Form />

        <Router>
        	<div>
        		<Navbar />
        		<Route exact path="/" component={Home} />
        		<Route exact path="/home" component={Home} />
        		<Route exact path="/messages" component={Messages} />
        		
        		

        	</div>
        </Router>
        


        

      </div>
    );
  }
}

export default App;
