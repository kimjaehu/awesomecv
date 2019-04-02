import React, { Component } from 'react';
import Education from './Education'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

class EducationList extends Component {

  constructor(props) {
    super(props);
    // this.props.education[i] = {
    //   id:i,
    //   schoolName: '',
    //   schoolFrom: '',
    //   schoolTo: '',
    //   degree: ''
    // }
    this.state = {
      education:0
    }  
  }

  addEducation = () => {
    let i = this.state.education;
    i++;
    this.props.education[i] = {
      id:i,
      schoolName: '',
      schoolFrom: '',
      schoolTo: '',
      degree: ''
    }
    this.props.edit(this.props.education);
    this.props.education[i].deleteEducation = () => {
      delete this.props.education[i];
      this.props.edit(this.props.education);

    };

  this.setState({education: i});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Education </h2>
        { Object.keys(this.props.education).map(i => 
            <Education key={i} education={this.props.education} educationVal={this.props.education[i]}/>)}
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addEducation}>
          Add an Education
        </Button>
      </div>
    );
  }
}
EducationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationList);