import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


// Material-Ui Tags
import { withStyles } from '@material-ui/core/styles';

// Material-Ui Icon

// Views Pages
import NavBar from './RecruiterNavBar';
import RecruiterDrawer from './RecruiterDrawer';
import AdminPostJob from '../components/recruiterComponents/AdminPostJob';


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

                  <AdminPostJob />



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