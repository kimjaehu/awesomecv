import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class JobEducationForm extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid>
        <Grid item xs className={classes.root}>
          <TextField
            label="Education Level"
            className={classes.textField}
            value={this.props.education.education_level}
            onChange={this.props.handler('education_level')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Education Area"
            className={classes.textField}
            value={this.props.education.education_area}
            onChange={this.props.handler('education_area')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    );
  }
}

JobEducationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobEducationForm);