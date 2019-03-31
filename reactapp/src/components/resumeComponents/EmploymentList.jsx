import React, { Component } from 'react';
import Employment from './Employment'
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

class EmploymentList extends Component {

  constructor(props) {
    super(props);
    this.props.employment[i] = {
      id:i,
      companyName: '',
      companyTitle: '',
      companyLocation:'',
      companyFrom: '',
      companyTo: '',
      description:''
    }
    this.state = {
      employment:1,
      form: [<Employment key={i} employmentVal={this.props.employment[i]} />]
    }  
  }

  employmentAddHandler = () => {

  }

  addEmployment = () => {
    let rr = this.state.form;
    i++;
    this.props.employment[i] = {
      id:i,
      companyName: '',
      companyTitle: '',
      companyLocation:'',
      companyFrom: '',
      companyTo: '',
      description:''
    }
    rr.push(<Employment key={i} employment={this.props.employment} employmentVal={this.props.employment[i]} employmentElm={this.state.form}/>)

    this.setState({ form: rr} )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Employment </h2>
          { this.state.form.map( emp => emp) }
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addEmployment}>
          Add an Employment
        </Button>
      </div>
    );
  }
}
EmploymentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmploymentList);