
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Divider from '@material-ui/core/Divider';
import CheckboxesGroup from '../../forms/JobRequirementsForm'
import OutlinedTextFields from '../../forms/JobCompanyForm'

const styles = theme => ({
  paper: {
    maxWidth: 924,
    margin: 'auto',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  topicField: {
    marginTop: 20,
  },
  formRow: {
    margin: 20,
  }
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container>
          <Grid xs className={classes.formRow}>
            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                Job Details
              </Typography>
              <Divider/>
            </Grid>
            <Grid item xs>
              <TextField
                id="outlined-name"
                label="Job Title"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Seniority"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid>
              <TextField
                id="outlined-name"
                label="City"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Province"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Country"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid>
              <TextField
                id="outlined-name"
                label="Job Description"
                multiline

                className={classes.textField}
                rows="4"
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                Job Requirements
              </Typography>
              <Divider/>
            </Grid>
            <Grid>
             <CheckboxesGroup/>
            </Grid>



            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                The Company
              </Typography>
              <Divider/>
            </Grid>
            <Grid>
             <OutlinedTextFields/>
            </Grid>


          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);