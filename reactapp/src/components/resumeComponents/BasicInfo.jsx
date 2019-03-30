import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  header: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 0,
  },
  address: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
});


class BasicInfo extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <article>
          <h2 className={classes.header}>Basic Information</h2>
        </article>
        <div>
        <TextField
            id="filled-full-width"
            label="First Name"
            value={this.props.info.firstName}
            onChange={this.props.handler('firstName')}
            className={classes.textField}
            placeholder="First Name"
            helperText="firstName"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

    
        <TextField
            id="filled-full-width"
            label="Last Name"
            value={this.props.info.lastName}
            onChange={this.props.handler('lastName')}
            className={classes.textField}
            placeholder="Last Name"
            helperText="lastName"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            id="filled-full-width"
            label="email"
            value={this.props.info.email}
            onChange={this.props.handler('email')}
            className={classes.textField}
            placeholder="email"
            helperText="email"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />
        <TextField
            id="filled-full-width"
            label="Phone Number"
            value={this.props.info.phoneNumber}
            onChange={this.props.handler('phoneNumber')}
            className={classes.textField}
            placeholder="Phone Number"
            helperText="phoneNumber"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="Address"
            value={this.props.info.address}
            onChange={this.props.handler('address')}
            className={classes.address}
            placeholder="Address"
            helperText="address"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    );
  }
}
BasicInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicInfo);