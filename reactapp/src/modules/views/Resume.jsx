import React, { Component } from 'react';
import BasicInfo from '../components/resumeComponents/BasicInfo';
import Summary from '../components/resumeComponents/Summary';
import EducationList from '../components/resumeComponents/EducationList';
import EmploymentList from '../components/resumeComponents/EmploymentList';
import ProjectList from '../components/resumeComponents/ProjectList';
import VolunteeringList from '../components/resumeComponents/VolunteeringList';
import SkillList from '../components/resumeComponents/SkillList';
import Button from '@material-ui/core/Button';
import LinkedInTest from '../components/oauth/LinkedInTest';
import axios from 'axios';

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state =  {
                        basic:  {
                                firstName: '',
                                lastName: '',
                                email: '',
                                phoneNumber: '',
                                address: '',
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
    return (
      <div>
        <BasicInfo info={this.state.basic} handler={this.basicHandler}/>
        <Summary sum={this.state.summary} handler={this.summaryHandler}/>
        <EducationList education={this.state.education} handler={this.educationHandler} edit={this.editEducation}/>
        <EmploymentList employment={this.state.employment} handler={this.employmentHandler} edit={this.editEmployment}/>
        <ProjectList project={this.state.project} handler={this.projectHandler} edit={this.editProject}/>
        <VolunteeringList volunteering={this.state.volunteering} handler={this.volunteeringHandler} edit={this.editVolunteering}/>
        <SkillList skill={this.state.skill} handler={this.skillHandler} edit={this.editSkill} />


        <Button variant="outlined" color="submit" onClick={this.onClickHandler}>Submit</Button>
      </div>
    );
  }
}

export default Resume;