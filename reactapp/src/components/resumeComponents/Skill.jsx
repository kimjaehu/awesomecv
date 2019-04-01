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
    // flexDirection: "column"
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


class Skill extends Component {
  state = {
    skillName: '',
  }

  skillValueHandler = (field) => {
    return (event) => {
      let skillValue = this.state;
      skillValue[field] = event.target.value;
      this.setState({skillValue: skillValue})
      this.props.skillVal[field] = this.state[field]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id={ this.props.skillVal.id }>
        <article>
          <h4 className={classes.header}> Skill { this.props.skillVal.id + 1 }</h4>
        </article>

        <div>
        <TextField
            onChange={ this.skillValueHandler('skillDescription') }
            value={this.state.skillDescription}
            id="filled-full-width"
            label="Skill"
            className={classes.textField}
            placeholder="Skill"
            fullWidth
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
Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);