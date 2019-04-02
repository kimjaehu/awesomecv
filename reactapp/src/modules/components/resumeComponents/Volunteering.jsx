import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  fromTo: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
  description: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 800,
  },
  header: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 0,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class Volunteering extends Component {
  state = {
    volunteeringName: '',
    volunteeringTitle: '',
    volunteeringLocation:'',
    volunteeringFrom: '',
    volunteeringTo: '',
  }

  volunteeringValueHandler = (field) => {
    return (event) => {
      let volunteeringValue = this.state;
      volunteeringValue[field] = event.target.value;
      this.setState({volunteeringValue: volunteeringValue})
      this.props.volunteeringVal[field] = this.state[field]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id={ this.props.volunteeringVal.id }>
        <article>
          <h4 className={classes.header}> Volunteering { this.props.volunteeringVal.id }</h4>
        </article>

        <div>
        <TextField
            onChange={ this.volunteeringValueHandler('volunteeringName') }
            value={this.state.volunteeringName}
            id="filled-full-width"
            label="volunteering Name"
            className={classes.textField}
            placeholder="volunteering Name"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.volunteeringValueHandler('volunteeringTitle') }
            value={this.state.volunteeringTitle}
            id="filled-full-width"
            label="Title/Position"
            className={classes.textField}
            placeholder="Title/Position"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.volunteeringValueHandler('volunteeringLocation') }
            value={this.state.volunteeringLocation}
            id="filled-full-width"
            label="Location"
            className={classes.textField}
            placeholder="Location"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />  

        <TextField
            onChange={ this.volunteeringValueHandler('volunteeringFrom') }
            value={this.state.volunteeringFrom}
            id="filled-full-width"
            label="From"
            className={classes.fromTo}
            placeholder="yyyy"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.volunteeringValueHandler('volunteeringTo') }
            value={this.state.volunteeringTo}
            id="filled-full-width"
            label="To"
            className={classes.fromTo}
            placeholder="yyyy"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />
        
        <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={this.props.volunteeringVal.deleteVolunteering}
          >
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        </div>
        
      </div>
    );
  }
}
Volunteering.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Volunteering);