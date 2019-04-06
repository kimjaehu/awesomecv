import React, { Component } from 'react';
import { getJwt } from './actions/AuthActions'
import axios from 'axios';
import { withRouter } from "react-router";

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
      // this.props.history.push('/')
    } else {
      console.log('have jwt and getting info')
      axios.get('/api/v1/users', { jwtToken: jwt } )
      .then(res => {
        this.setState({ users:res.data })
      }).catch(err => {
        localStorage.removeItem('jwtToken')
        // this.props.history.push('/')
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

export default withRouter(Authenticated)