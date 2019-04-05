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
  },
  streetAddress: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  selection: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const provinceSelection = [
  'BC',
  'AB',
  'SK',
  'MB',
  'ON',
  'QC',
  'NB',
  'PE',
  'NS',
  'NL',
  'YT',
  'NT',
  'NU'
]

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
            label="Street Address"
            value={this.props.info.streetAddress}
            onChange={this.props.handler('streetAddress')}
            className={classes.streetAddress}
            placeholder="Street Address"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="filled-full-width"
            label="City"
            value={this.props.info.city}
            onChange={this.props.handler('city')}
            className={classes.textField}
            placeholder="City"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          
          <TextField
            id="filled-full-width"
            label="Province"
            value={this.props.info.province}
            onChange={this.props.handler('province')}
            className={classes.textField}
            placeholder="Province"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {/* <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-label-placeholder">
              Province
            </InputLabel>
            <Select
              onChange={ this.props.handler('province') }
              value={this.props.info.province}
              className={classes.textField}
              fullWidth
              input={<FilledInput name="province" id="filled-province" margin="normal"/> }
            >
              {provinceSelection.map((currentValue) => {
                console.log(currentValue)
                return <MenuItem value={currentValue}>{currentValue}</MenuItem>
              })}
            </Select>
          </FormControl> */}

          <TextField
            id="filled-full-width"
            label="Postal Code"
            value={this.props.info.postalCode}
            onChange={this.props.handler('postalCode')}
            className={classes.textField}
            placeholder="Postal Code"
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