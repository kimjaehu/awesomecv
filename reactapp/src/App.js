import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withRoot from './modules/withRoot';
import Main from './modules/views/Main'
import Authenticated from './modules/components/mainComponents/Authenticated'
import Users from './modules/views/Users'
import Applicant from './modules/views/Applicant'
import RecruiterAppPostJob from './modules/views/RecruiterAppPostJob'
import RecruiterAppJobs from './modules/views/RecruiterAppJobs'
import Home from './modules/views/Home'
import RecruiterApp from './modules/views/RecruiterApp'

class App extends Component {

  state = {
    code: '',
    errorMessage: '',
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/recruiter/recruiter_id/find" exact component={Home} />
        <Route path="/recruiter/recruiter_id/post_job" exact component={RecruiterAppPostJob} />
        <Route path="/recruiter/recruiter_id/jobs" exact component={RecruiterAppJobs} />
        <Route path="/recruiter" exact component={RecruiterApp} />
      </Router>
    );
  }
}

export default withRoot(App)