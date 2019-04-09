import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';

// Material-Ui Tags
import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';

// Material-Ui Icon

// Views Pages
import Users from './Users';
import NavBar from './NavBarTeste';
import RecruiterDrawer from './RecruiterDrawer';
import AdminJobFlow from '../components/recruiterComponents/AdminJobFlow';
import AdminPostJob from '../components/recruiterComponents/AdminPostJob';
// import DrawerList from '../components/recruiterComponents/DrawerList';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    margin: 'auto',
    overflow: 'hidden',
    flexDirection: "column"
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#EFF1F4',
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth + drawerWidth,
    paddingTop: 100,
    minHeight: 740,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
});

class RecruiterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      recruiterData: null,
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  // componentDidMount() {
  //   axios.get('http://localhost:3000/api/v1/users/1/jobs')
  //     .then(response => {
  //         console.log(response)
  //         this.setState({
  //             recruiterData: response.data
  //         })
  //     })
  //     .catch(error => console.log(error))
  // }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          handleDrawerOpen={this.handleDrawerOpen}
          state={this.state}
        />
        <RecruiterDrawer
          handleDrawerClose={this.handleDrawerClose}
          open={this.state.open}
        />
        <main
          className={classNames(classes.content, {[classes.contentShift]: this.state.open,})}
        >

                  <AdminJobFlow />



        </main>
      </div>
    );
  }
}

RecruiterApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RecruiterApp);