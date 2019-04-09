import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import PersonIcon from '@material-ui/icons/Person';

const categories = [
  {
    id: 'RECRUITER',
    children: [
      { id: 'Post Job', icon: <PeopleIcon color="secondary"/> },
      { id: 'Find Candidates', icon: <DnsRoundedIcon color="secondary"/> },
      { id: 'Job Board', icon: <PermMediaOutlinedIcon color="secondary"/> }
    ],
  }
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
    // font-weight: 'bold',
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: theme.palette.common.white,
  },
  // Drawler Header CSS
  itemCategory: {
    // backgroundColor: '#000',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  // firebase: {
  //   fontSize: 24,
  //   fontFamily: theme.typography.fontFamily,
  //   // color: theme.palette.common.white,
  // },
  itemActionable: {
    '&:hover': {
      // hover color
      backgroundColor: '#fc766a',
    },
  },
  itemActiveItem: {
    // color: '#4fc3f7',
    backgroundColor: '#fc766a',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
});

function DrawerList(props) {
  const { classes, ...other } = props;

  return (
      <List disablePadding>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
                fontWeight="fontWeightMedium"
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem,
                )}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense,
                  }}
                  >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
  );

}

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerList);