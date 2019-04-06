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
      console.log('dont have jwt')
      this.props.history.push('/')
    } else {
      console.log(jwt)
      axios.get('/api/v1/users', { headers: {jwtToken: jwt} } )
      .then(res => {
        console.log('this is after getting res',res.data)
        this.setState({ users:res.data })
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