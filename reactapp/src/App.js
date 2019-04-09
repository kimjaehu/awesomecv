import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withRoot from './modules/withRoot';
import Main from './modules/views/Main'
import Authenticated from './modules/components/mainComponents/Authenticated'
import Users from './modules/views/Users'
import Applicant from './modules/views/Applicant'
import RecruiterAppPostJob from './modules/views/RecruiterAppPostJob'
import RecruiterAppJobs from './modules/views/RecruiterAppJobs'
import Teste from './modules/views/Teste'
import ApplicantMap from './modules/components/resumeComponents/ApplicantMap'
import Resume from './modules/components/resumeComponents/Resume'

class App extends Component {

  state = {
    code: '',
    errorMessage: '',
  }

  render() {
    return (
      <Router>

        <Route path="/" exact component={Main} />
        {/* <authenticated> */}
          <Route path="/recruiter/:recruiter_id/find" exact component={Users} />
          <Route path="/recruiter/:recruiter_id/post_job" exact component={RecruiterAppPostJob} />
          <Route path="/recruiter/:recruiter_id/jobs" exact component={RecruiterAppJobs} />
          <Route path="/applicant/:applicant_id/resume" exact component={Resume} />
          <Route path="/applicant/:applicant_id/jobs" exact component={ApplicantMap} />
          <Route path="/applicant/:applicant_id/" exact component={Applicant} />
        {/* </authenticated> */}
      </Router>
    );
  }
}

export default withRoot(App)