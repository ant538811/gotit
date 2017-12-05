import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loadingGif from './components/loadingGif.gif';

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
          <img src={loadingGif} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME TO YOUR WORKFORCE</h1>
        </header>

        <br/><br/>
        <br/><br/>
        
        <Form />

        


      </div>
    );
  }
}

export default App;
