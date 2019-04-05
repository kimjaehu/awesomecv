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
    flexDirection: "column",
    width: "auto",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  fromTo: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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

class Education extends Component {
  state = {
    schoolName: '',
    degree: '',
    schoolFrom: '',
    SchoolTo: ''
  }

  educationValueHandler = (field) => {
    return (event) => {
      let educationValue = this.state;
      educationValue[field] = event.target.value;
      this.setState({educationValue: educationValue})
      this.props.educationVal[field] = this.state[field]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id={ this.props.educationVal.id }>
        <article>
        <h4 className={classes.header}>
            Education {this.props.educationVal.id }
          </h4>
        </article>

        <div>
        <TextField
            onChange={ this.educationValueHandler('schoolName') }
            value={this.state.schoolName}
            id="filled-full-width"
            label="School Name"
            className={classes.textField}
            placeholder="School Name"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.educationValueHandler('degree') }
            value={this.state.degree}
            id="filled-full-width"
            label="Degree"
            className={classes.textField}
            placeholder="Degree"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />  

        <TextField
            onChange={ this.educationValueHandler('schoolFrom') }
            value={this.state.schoolFrom}
            id="filled-full-width"
            label="From"
            type="date"
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
            onChange={ this.educationValueHandler('schoolTo') }
            value={this.state.schoolTo}
            id="filled-full-width"
            label="From"
            className={classes.fromTo}
            type="date"
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
            onClick={this.props.educationVal.deleteEducation}
          >
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        </div>
      </div>
    );
  }
}
Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);