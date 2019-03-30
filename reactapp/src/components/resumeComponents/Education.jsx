import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

// const education = [
//   {
//     value: '',
//     label: '',
//   },
//   {
//     value: 'phd',
//     label: 'PhD',
//   },
//   {
//     value: 'master',
//     label: 'Master',
//   },
//   {
//     value: 'university',
//     label: 'University',
//   },
//   {
//     value: 'college',
//     label: 'College',
//   },
//   {
//     value: '< highschool',
//     label: '< Highschool',
//   },
// ];


const handleClick = (event) => {
  event.preventDefault();
}


class Education extends Component {
  state = {
    schoolName: ''
  }

  handleSchoolName = (e) => {
    this.setState({ schoolName: e.target.value}, () => {
      this.props.educationVal.schoolName = this.state.schoolName
    })

  }

  render() {
    const { classes } = this.props;
    console.log(this.props.educationVal.id)
    return (
      <div className={classes.container} id={ this.props.educationVal.id }>
        <article>
          <h4 className={classes.header}>Education { this.props.educationVal.id + 1 }</h4>
        </article>

        <div>
        <TextField
            onChange={ this.handleSchoolName }
            value={this.state.schoolName}
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
            onChange={this.handleSchoolName}
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

      </div>
    );
  }
}
Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);