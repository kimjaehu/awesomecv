import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Login from '../components/mainComponents/Login'
import Register from '../components/mainComponents/Register'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { userRegistrationRequest } from '../components/mainComponents/actions/RegistrationActions.jsx'
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = {
  bg:{
      background: "#28373d",
      color: "white",
      }
}

class Main extends React.Component {
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, userRegistrationRequest } = this.props;

    return (
      <div className={classes.bg}>

            {/* <img src="" alt="Awesome Logo" /> */}
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh'}}
              >
             
                <Grid item xs={8} sm={4}>
                <div>
                  <Typography component="h2" variant="h2" align="center" color="primary" gutterBottom>Welcome. It's </Typography>
                </div>
                <div>
                  <Typography component="h2" variant="h2" align="center" color="primary" gutterBottom> Awesome </Typography>
                </div>
                
                <Paper className={classes.paper} elevation={1}>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth"
                      direction="row"
                    >
                      <Tab label="Log In" />
                      <Tab label="Register" />
                    </Tabs>
                  </AppBar>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                  >
                  <TabContainer dir={theme.direction}>
                    <Login />
                  </TabContainer>
                  <TabContainer dir={theme.direction}>
                    <Register userRegistrationRequest={userRegistrationRequest}/>
                  </TabContainer>
                  </SwipeableViews>     
                </Paper>                  
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