import React, { Component } from 'react';
import Skill from './Skill'
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

class SkillList extends Component {

  constructor(props) {
    super(props);
    this.props.skill[i] = {
      id:i,
      skillName: '',
      skillDescription: '',
      skillLink:''
    }
    this.state = {
      skill:1,
      form: [<Skill key={i} skillVal={this.props.skill[i]} />]
    }  
  }

  skillAddHandler = () => {

  }

  addSkill = () => {
    let rr = this.state.form;
    i++;
    this.props.skill[i] = {
      id:i,
      skillName: '',
      skillDescription: '',
      skillLink:''
    }
    rr.push(<Skill key={i} skill={this.props.skill} skillVal={this.props.skill[i]} skillElm={this.state.form}/>)

    this.setState({ form: rr} )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Skill </h2>
          { this.state.form.map( pro => pro) }
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addSkill}>
          Add a Skill
        </Button>
      </div>
    );
  }
}
SkillList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillList);