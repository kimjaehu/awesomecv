import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withRoot from './modules/withRoot';
import Main from './modules/views/Main'
import Authenticated from './modules/components/mainComponents/Authenticated'
import Users from './modules/views/Users'
import Navbar from './modules/views/Navbar'

class App extends Component {

  state = {
    code: '',
    errorMessage: '',
  }

  render() {
    return (
      <Router>
        <Authenticated>
          <Route path="/users" exact component={Navbar} />
        </Authenticated>
          <Route path="/" exact component={Main} />
      </Router>
    );
  }
}

export default withRoot(App)