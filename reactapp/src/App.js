import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

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