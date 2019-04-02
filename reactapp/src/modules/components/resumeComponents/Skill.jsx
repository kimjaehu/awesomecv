import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';

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
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
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
    
    const skillSelection = [
      'C#',
      'Elixir',
      'Go',
      'Java',
      'JavaScript',
      'PHP',
      'Python',
      'Ruby',
      'Rust',
      'Swift',
      'TypeScript',
      'Angular',
      'Django',
      'Express',
      'Node',
      'Rails',
      'React',
      'Vue',
      'Ruby'
    ]
    
    return (
      <div className={classes.container} id={ this.props.skillVal.id }>
        <article>
          <h4 className={classes.header}> Skill { this.props.skillVal.id }</h4>
        </article>

        <div>
        {/* <TextField
            onChange={ this.skillValueHandler('skillNamen') }
            value={this.state.skillName}
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
        /> */}

        <InputLabel htmlFor="filled-skill">Skill</InputLabel>
          <Select
            onChange={ this.skillValueHandler('skillNamen') }
            value={this.state.skillName}
            input={<FilledInput name="skill" id="filled-skill" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {skillSelection.map((currentValue) => {
              console.log(currentValue)
              return <MenuItem value={currentValue}>{currentValue}</MenuItem>
            })}
          </Select>

        <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={this.props.skillVal.deleteSkill}
          >
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