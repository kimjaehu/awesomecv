import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  },
  header: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 0,
  },
});


class Summary extends Component {
  state = {
    Summary: '',
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <article>
          <h2 className={classes.header}>Summary</h2>
        </article>
        <div>
        <TextField
            id="summary"
            label="Summary"
            className={classes.textField}
            placeholder="Tell us about yourself"
            helperText="summary"
            fullWidth
            multiline
            rows="3"
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
Summary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Summary);