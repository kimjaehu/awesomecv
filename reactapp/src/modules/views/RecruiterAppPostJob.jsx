import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material-Ui Tags
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material-Ui Icon
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';

// Views Pages

import Users from './Users';
import AdminJobFlow from '../components/recruiterComponents/AdminJobFlow';
import Content from '../components/recruiterComponents/AdminPostJob';
import DrawerList from '../components/recruiterComponents/DrawerList';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    margin: 'auto',
    overflow: 'hidden',
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#28373d",
  },
  drawerHeader: {
    // backgroundColor: '#ffa898',
    // color: "#fff",
  },
  drawerSpace: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
});

class CandidateApp extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              AwesomeCV
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
          paper: classes.drawerPaper,
          }}
        >

          <div className={classNames(classes.drawerHeader, classes.drawerSpace)}>

          <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <ListItemIcon>
              <PersonIcon color="secondary"/>
            </ListItemIcon>
            <ListItemText
              classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense,
              }}
              fontWeight="fontWeightMedium"
            >
              Username
            </ListItemText>
          </ListItem>

          <IconButton onClick={this.handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          </div>
          <Divider />

          <DrawerList/>

        </Drawer>
        <main
        className={classNames(classes.content, {
        [classes.contentShift]: open,
        })}
        >
          <main className={classes.content}>

           <div className={classes.toolbar} />
           <Content/>

          </main>
        </main>
      </div>
    );


  }
}

CandidateApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CandidateApp);