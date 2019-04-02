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

class Project extends Component {
  state = {
    projectName: '',
    projectDescription: '',
    projectLink:''
  }

  projectValueHandler = (field) => {
    return (event) => {
      let projectValue = this.state;
      projectValue[field] = event.target.value;
      this.setState({projectValue: projectValue})
      this.props.projectVal[field] = this.state[field]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id={ this.props.projectVal.id }>
        <article>
          <h4 className={classes.header}> Project { this.props.projectVal.id }</h4>
        </article>

        <div>
        <TextField
            onChange={ this.projectValueHandler('projectName') }
            value={this.state.projectName}
            id="filled-full-width"
            label="Project Name"
            className={classes.textField}
            placeholder="Project Name"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.projectValueHandler('projectDescription') }
            value={this.state.projectDescription}
            id="filled-full-width"
            label="Description"
            className={classes.textField}
            placeholder="Description"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />

        <TextField
            onChange={ this.projectValueHandler('projectLink') }
            value={this.state.projectLink}
            id="filled-full-width"
            label="Link to project"
            className={classes.textField}
            placeholder="Link to project"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
        />  

        <Button variant="contained" color="secondary" className={classes.button} onClick={this.props.projectVal.deleteProject}>
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        </div>
        
      </div>
    );
  }
}
Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);