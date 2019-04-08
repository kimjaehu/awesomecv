import React, { Component } from 'react';
import { getJwt } from './actions/AuthActions'
import axios from 'axios';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';


class Authenticated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt()
    if (!jwt) {
      this.props.history.push('/')
    } else {
      axios.get('/api/v1/users/', { headers: {jwtToken: jwt} } )
    .then(res => {
      console.log('success',res)
      this.setState({ users:res.data })
      this.props.history.push(`/users/:id`)
    }).catch(err => {
      localStorage.removeItem('jwtToken')
      this.props.history.push('/')
    })
    }
    
  }
 
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Authenticated.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Authenticated)