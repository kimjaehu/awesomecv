import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Login from '../components/mainComponents/Login'
import Register from '../components/mainComponents/Register'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { userRegistrationRequest } from '../components/mainComponents/actions/RegistrationActions.jsx'

const styles = {
  bg: {

  }
}

class Main extends React.Component {

  render() {
    const { classes, theme, userRegistrationRequest } = this.props;

    return (
      <div className={classes.bg}>
        
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={3}>
            <h1>Welcome. It's Awesome</h1>
          <Login />
          <Register userRegistrationRequest={userRegistrationRequest}/>
          </Grid>   
          </Grid>
          
      </div>
      
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  userRegistrationRequest: PropTypes.func.isRequired
};

export default connect(null, { userRegistrationRequest }) (withStyles(styles, { withTheme: true })(Main));