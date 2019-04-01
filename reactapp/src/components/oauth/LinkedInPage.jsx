import React, { Component } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';

const LINKEDIN_KEY = process.env.REACT_APP_LINKEDIN_KEY

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });

    console.log('this.props.linkedin',this.props.linkedin)
    console.log('linkedin state', this.state)
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  
  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId={LINKEDIN_KEY}
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="https://localhost:3006/users/linkedin"
        >
          <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>

        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;