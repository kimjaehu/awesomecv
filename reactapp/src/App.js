import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
      </Router>
    );
  }
}

export default App