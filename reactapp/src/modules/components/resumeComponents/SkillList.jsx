import React, { Component } from 'react';
import Skill from './Skill'
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

class SkillList extends Component {

  constructor(props) {
    super(props);
    // this.props.skill[i] = {
    //   id:i,
    //   skillName: '',
    // }
    this.state = {
      skill:0
    }  
  }

  addSkill = () => {
    var i = this.state.skill;
    i++;
    this.props.skill[i] = {
      id:i,
      skillName: ''
    }
    this.props.edit(this.props.skill);
    this.props.skill[i].deleteSkill = () => {
      delete this.props.skill[i];
      this.props.edit(this.props.skill);

    };

  this.setState({skill: i});
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Skill </h2>
        { Object.keys(this.props.skill).map(i => 
            <Skill key={i} skill={this.props.skill} skillVal={this.props.skill[i]}/>)}
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