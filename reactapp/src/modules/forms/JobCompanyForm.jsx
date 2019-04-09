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

class JobCompanyForm extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid>


        <Grid item xs className={classes.root}>
          <TextField
            label="Company Name"
            className={classes.textField}
            value={this.props.cpn.company_name}
            onChange={this.props.handler('company_name')}
            margin="normal"
            variant="outlined"

          />
          <TextField
            label="Number of Workers"
            className={classes.textField}
            value={this.props.cpn.company_description}
            onChange={this.props.handler('company_description')}
            margin="normal"
            variant="outlined"

          />

        </Grid>

        <Grid className={classes.root}>
              <TextField
                label="Description"
                multiline
                fullWidth
                className={classes.textField}
                rows="4"
                value={this.props.cpn.number_of_workers}
                onChange={this.props.handler('number_of_workers')}
                margin="normal"
                variant="outlined"
              />
            </Grid>





      </Grid>
    );
  }
}

JobCompanyForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobCompanyForm);