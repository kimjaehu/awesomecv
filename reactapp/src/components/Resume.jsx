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
                                highEducation: '',
                                schoolName: '',
                                schoolFrom: '',
                                schoolTo: '',
                                degree: '',
                                }
                  }
  }

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

  onClickHandler = (event) => {
    event.preventDefault();
    console.log(this.state)
    axios.post('/users', this.state)
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
        <EducationList />
        
        <button onClick={this.onClickHandler}>Test</button>
      </div>
    );
  }
}

export default Resume;