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
      highEducation: '',
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
NPM
  educationAddHandler = () => {

  }

  addEducation = () => {
    let rr = this.state.form;
    i++;
    this.props.education[i] = {
      id:i,
      highEducation: '',
      schoolName: '',
      schoolFrom: '',
      schoolTo: '',
      degree: ''
    }
    rr.push(<Education key={i} education={this.props.education} educationVal={this.props.education[i]}/>)

    this.setState({ form: rr} )
    for ( let i of this.state.form) {
      console.log(i)
    }
  }


  render() {
    const { classes } = this.props;
    console.log(this.props.education)
    // this.setState({ form: this.state.form.push(<Education education={this.props.education} />)})
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