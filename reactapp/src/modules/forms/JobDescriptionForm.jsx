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

class JobDescriptionForm extends React.Component {




  render() {
    const { classes } = this.props;

    return (
      <Grid>


        <Grid item xs className={classes.root}>
          <TextField
            label="Job Category"
            className={classes.textField}
            value={this.props.detail.job_category}
            onChange={this.props.handler('job_category')}
            margin="normal"
            variant="outlined"

          />
          <TextField
            label="Job Title"
            className={classes.textField}
            value={this.props.detail.job_title}
            onChange={this.props.handler('job_title')}
            margin="normal"
            variant="outlined"

          />
          <TextField
            label="Job Level"
            className={classes.textField}
            value={this.props.detail.job_level}
            onChange={this.props.handler('job_level')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid className={classes.root}>
          <TextField
            label="Postal Code"
            className={classes.textField}
            placeholder="A1A 1A1"
            value={this.props.detail.postal_code}
            onChange={this.props.handler('postal_code')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="City"
            className={classes.textField}
            value={this.props.detail.city}
            onChange={this.props.handler('city')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Province"
            className={classes.textField}
            value={this.props.detail.province}
            onChange={this.props.handler('province')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Country"
            className={classes.textField}
            value={this.props.detail.country}
            onChange={this.props.handler('country')}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid className={classes.root}>
          <TextField
            label="Job Description"
            multiline
            fullWidth
            className={classes.textField}
            rows="4"
            value={this.props.detail.job_description}
            onChange={this.props.handler('job_description')}
            margin="normal"
            variant="outlined"
          />
        </Grid>

      </Grid>
    );
  }
}

JobDescriptionForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobDescriptionForm);