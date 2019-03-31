import React, { Component } from 'react';
import Education from './Education'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

let i = 0;

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
    this.props.education[i] = {
      id:i,
      schoolName: '',
      schoolFrom: '',
      schoolTo: '',
      degree: ''
    }
    this.state = {
      education:1,
      form: [<Education key={i} educationVal={this.props.education[i]} />]
    }  
  }

  educationAddHandler = () => {

  }

  addEducation = () => {
    let rr = this.state.form;
    i++;
    this.props.education[i] = {
      id:i,
      schoolName: '',
      schoolFrom: '',
      schoolTo: '',
      degree: ''
    }
    rr.push(<Education key={i} education={this.props.education} educationVal={this.props.education[i]} educationElm={this.state.form}/>)

    this.setState({ form: rr} )
  }

  // deleteEducation = (index, event) => {
  //   const education = Object.assign([], this.state.forms)
  //   education.splice(index, 1)
  //   this.setState({education:education})
  // }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Education </h2>
          { this.state.form.map( edu => edu) }
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addEducation }>
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