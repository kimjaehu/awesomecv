import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import withRoot from './modules/withRoot';

import PersistentDrawerLeft from './modules/views/Navbar.jsx';

class App extends Component {

  state = {
    code: '',
    errorMessage: '',
  }

  render() {
    return (
      <Router>
          <PersistentDrawerLeft />
      </Router>
    );
  }
}

export default App