import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Summary from './Summary';
import EducationList from './EducationList';
import EmploymentList from './EmploymentList';
import ProjectList from './ProjectList';
import VolunteeringList from './VolunteeringList';
import SkillList from './SkillList';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinkedInTest from '../oauth/LinkedInTest';
import axios from 'axios';


  const styles = theme => ({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    button: {
      marginTop:20,
      margin: theme.spacing.unit,
    },
  });

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state =  {
                        basic:  {
                                firstName: '',
                                lastName: '',
                                email: '',
                                phoneNumber: '',
                                streetAddress: '',
                                city: '',
                                province: '',
                                postalCode: '',
                                },
                      summary:  {
                                summary:'',
                                },
                    education:  {
                                },
                  employment:  {
                                },
                      project:  {
                                },
                  volunteering: {
                                },
                        skill:  {
                                }
                  }
  }
  
  basicHandler = (field) => {
    return (event) => {
      let basic = this.state.basic;
      basic[field] = event.target.value;
      this.setState({basic: basic})
    }
  }

  summaryHandler = (field) => {
    return (event) => {
      let summary = this.state.summary;
      summary[field] = event.target.value;
      this.setState({summary: summary})
    }
  }

  educationHandler = (field) => {
    return (event) => {
      let education = this.state.education;
      education[field] = event.target.value;
      this.setState({education: education})
    }
  }

  employmentHandler = (field) => {
    return (event) => {
      let employment = this.state.employment;
      employment[field] = event.target.value;
      this.setState({employment: employment})
    }
  }

  projectHandler = (field) => {
    return (event) => {
      let project = this.state.project;
      project[field] = event.target.value;
      this.setState({project: project})
    }
  }

  editEducation = (newEducations) => {
    this.setState({education: newEducations});
  }

  editProject = (newProjects) => {
    this.setState({project: newProjects});
  }

  editEmployment = (newEmployements) => {
    this.setState({employment: newEmployements});
  }

  editVolunteering = (newVolunteerings) => {
    this.setState({volunteering: newVolunteerings});
  }

  editSkill = (newSkills) => {
    this.setState({skill: newSkills});
  }

  volunteeringHandler = (field) => {
    return (event) => {
      let volunteering = this.state.volunteering;
      volunteering[field] = event.target.value;
      this.setState({volunteering: volunteering})
    }
  }

  skillHandler = (field) => {
    return (event) => {
      let skill = this.state.skill;
      skill[field] = event.target.value;
      this.setState({skill: skill})
    }
  }

  onClickHandler = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <BasicInfo info={this.state.basic} handler={this.basicHandler}/>
          <Divider />
          <Summary sum={this.state.summary} handler={this.summaryHandler}/>
          <Divider />
          <EducationList education={this.state.education} handler={this.educationHandler} edit=
          {this.editEducation}/>
          <Divider />
          <EmploymentList employment={this.state.employment} handler={this.employmentHandler} edit={this.editEmployment}/>
          <Divider />
          <ProjectList project={this.state.project} handler={this.projectHandler} edit={this.editProject}/>
          <Divider />
          <VolunteeringList volunteering={this.state.volunteering} handler={this.volunteeringHandler} edit={this.editVolunteering}/>
          <Divider />
          <SkillList skill={this.state.skill} handler={this.skillHandler} edit={this.editSkill} />
          <Divider />

          <Button className={classes.button} variant="outlined" color="submit" onClick={this.onClickHandler}>Submit</Button>
        </Paper>
      </div>
    );
  }
}
Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);