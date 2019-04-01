import React, { Component } from 'react';
import Project from './Project'
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

class ProjectList extends Component {

  constructor(props) {
    super(props);
    this.props.project[i] = {
      id:i,
      projectName: '',
      projectDescription: '',
      projectLink:''
    }
    this.state = {
      project:1,
      form: [<Project key={i} projectVal={this.props.project[i]} />]
    }  
  }

  projectAddHandler = () => {

  }

  addProject = () => {
    let rr = this.state.form;
    i++;
    this.props.project[i] = {
      id:i,
      projectName: '',
      projectDescription: '',
      projectLink:''
    }
    rr.push(<Project key={i} project={this.props.project} projectVal={this.props.project[i]} projectElm={this.state.form}/>)

    this.setState({ form: rr} )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Project </h2>
          { this.state.form.map( pro => pro) }
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addProject}>
          Add a Project
        </Button>
      </div>
    );
  }
}
ProjectList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectList);