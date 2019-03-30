import React, { Component } from 'react';
import BasicInfo from './resumeComponents/BasicInfo';
import Summary from './resumeComponents/Summary';
import EducationList from './resumeComponents/EducationList';
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
                                }
                  }
  }

  // id= 'sadasd'
  // key: 1,
  // highEducation: '',
  // schoolName: '',
  // schoolFrom: '',
  // schoolTo: '',
  // degree: '',

  testStuff() {
    console.log("top state", this.state)
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

  onClickHandler = (event) => {
    event.preventDefault();
    console.log(this.state.education)
    console.log(this.state)
    axios.post('http://localhost:3000/users', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <BasicInfo info={this.state.basic} handler={this.basicHandler}/>
        <Summary sum={this.state.summary} handler={this.summaryHandler}/>
        <EducationList education={this.state.education} handler={this.educationHandler} />


        <button onClick={this.onClickHandler}>Test</button>
      </div>
    );
  }
}

export default Resume;