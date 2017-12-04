import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Navbar from './components/Navbar.jsx';
import Buttongroup from './components/Buttongroup.jsx';
import Progressbar from './components/Progressbar.jsx';

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Form />
        <Jumbotron />
        <Router><Navbar /></Router>
        <Buttongroup />
        <Progressbar />


      </div>
    );
  }
}

export default App;
