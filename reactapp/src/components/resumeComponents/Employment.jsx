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

class Employment extends Component {
  state = {
    companyName: '',
    companyTitle: '',
    companyLocation:'',
    companyFrom: '',
    companyTo: '',
    description:''
  }

  employmentValueHandler = (field) => {
    return (event) => {
      let employmentValue = this.state;
      employmentValue[field] = event.target.value;
      this.setState({employmentValue: employmentValue})
      this.props.employmentVal[field] = this.state[field]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id={ this.props.employmentVal.id }>
        <article>
          <h4 className={classes.header}> Employment { this.props.employmentVal.id + 1 }</h4>
        </article>

        <div>
        <TextField
            onChange={ this.employmentValueHandler('companyName') }
            value={this.state.companyName}
            id="filled-full-width"
            label="company Name"
            className={classes.textField}
            placeholder="company Name"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.employmentValueHandler('companyTitle') }
            value={this.state.companyTitle}
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
            onChange={ this.employmentValueHandler('companyLocation') }
            value={this.state.companyLocation}
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
            onChange={ this.employmentValueHandler('companyFrom') }
            value={this.state.companyFrom}
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
            onChange={ this.employmentValueHandler('companyTo') }
            value={this.state.companyTo}
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
        
        <TextField
            onChange={ this.employmentValueHandler('description') }
            value={this.state.description}
            id="description"
            label="description"
            className={classes.description}
            placeholder="Description"
            fullWidth
            multiline
            rows="3"
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />
        <Button variant="contained" color="secondary" className={classes.button} >
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        </div>
        
      </div>
    );
  }
}
Employment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Employment);