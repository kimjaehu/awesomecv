import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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

const education = [
  {
    value: '',
    label: '',
  },
  {
    value: 'phd',
    label: 'PhD',
  },
  {
    value: 'master',
    label: 'Master',
  },
  {
    value: 'university',
    label: 'University',
  },
  {
    value: 'college',
    label: 'College',
  },
  {
    value: '< highschool',
    label: '< Highschool',
  },
];


const handleClick = (event) => {
  event.preventDefault();
}



class Education extends Component {
  state = {
    education: '',
    educationProperty: {
      schoolName: '',
      schoolFrom: '',
      schoolTo: '',
      degree: '',
    }
  };

  handleChange = education => event => {
    this.setState({ [education]: event.target.value });
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <article>
          <h2 className={classes.header}>Education</h2>
        </article>

        <div>
          
          <TextField
            id="filled-select-education"
            select
            label="Select"
            className={classes.textField}
            value={this.state.education}
            onChange={this.handleChange('education')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Highest Education"
            margin="normal"
            variant="filled"
          >
            {education.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

        </div>

        <div>
        <TextField
            id="filled-full-width"
            label="School Name"
            className={classes.textField}
            placeholder="School Name"
            helperText="schoolName"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            id="filled-full-width"
            label="Degree"
            className={classes.textField}
            placeholder="Degree"
            helperText="degree"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />  

        <TextField
            id="filled-full-width"
            label="From"
            className={classes.fromTo}
            placeholder="yyyy"
            helperText="schoolFrom"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            id="filled-full-width"
            label="To"
            className={classes.fromTo}
            placeholder="yyyy"
            helperText="to"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />
        
        </div>
        <Button variant="outlined" color="primary" className={classes.button } onClick={handleClick}>
          Add an Education
        </Button>
      </div>
    );
  }
}
Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);