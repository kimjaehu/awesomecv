import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withRoot from './modules/withRoot';
import Main from './modules/views/Main'
import Navbar from './modules/views/Navbar.jsx';

class App extends Component {

  state = {
    code: '',
    errorMessage: '',
  }

  render() {
    return (
      <Router>
          <Route path="/" exact component={Main} />
          <Route path="/users/" component={Navbar} /> 
      </Router>
    );
  }
}

export default withRoot(App)