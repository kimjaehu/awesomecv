import React, { Component } from 'react';
import BasicInfo from './resumeComponents/BasicInfo';
import Summary from './resumeComponents/Summary';
import EducationList from './resumeComponents/EducationList';
import EmploymentList from './resumeComponents/EmploymentList';
import ProjectList from './resumeComponents/ProjectList';
import VolunteeringList from './resumeComponents/VolunteeringList';
import axios from 'axios';

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state =  {
                    basic:      {
                                firstName: '',
                                lastName: '',
                                email: '',
                                phoneNumber: '',
                                address: '',
                                },
                    summary:    {
                                summary:'',
                                }, 
                    education:  {
                                count: 1,
                                values:  {
                                        }
                                },
                  employment:  {
                                count: 1,
                                values:  {
                                }
                                  },
                      project:  {
                                count: 1,
                                values:  {
                                        }
                                },
                  volunteering:  {
                                count: 1,
                                values:  {
                                }
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

  volunteeringHandler = (field) => {
    return (event) => {
      let volunteering = this.state.volunteering;
      volunteering[field] = event.target.value;
      this.setState({volunteering: volunteering})
    }
  }

  onClickHandler = (event) => {
    event.preventDefault();
    console.log(this.state)
    // axios.post('http://localhost:3000/users', this.state)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <BasicInfo info={this.state.basic} handler={this.basicHandler}/>
        <Summary sum={this.state.summary} handler={this.summaryHandler}/>
        <EducationList education={this.state.education} handler={this.educationHandler} />
        <EmploymentList employment={this.state.employment} handler={this.employmentHandler} />
        <ProjectList project={this.state.project} handler={this.projectHandler} />
        <VolunteeringList volunteering={this.state.volunteering} handler={this.volunteeringHandler} />
        
        <button onClick={this.onClickHandler}>Submit</button>
      </div>
    );
  }
}

export default Resume;