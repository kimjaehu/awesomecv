import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material-Ui Tags
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material-Ui Icon
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';

// Views Pages
import Users from './Users';
import AdminJobFlow from '../components/recruiterComponents/AdminJobFlow';
import RecruiterDrawerList from '../components/recruiterComponents/RecruiterDrawerList';

const drawerWidth = 240;

const styles = theme => ({
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
});

class RecruiterDrawer extends React.Component {

  render() {
    const { classes, theme } = this.props;

    return (

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.props.open}
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
            >
              Username
            </ListItemText>
          </ListItem>

          <IconButton onClick={this.props.handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>

        </div>
        <Divider />
        <RecruiterDrawerList />
      </Drawer>

    );
  }
}

RecruiterDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RecruiterDrawer);