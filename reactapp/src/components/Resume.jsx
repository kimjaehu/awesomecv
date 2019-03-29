import React, { Component } from 'react';
import BasicInfo from './resumeComponents/BasicInfo';
import Summary from './resumeComponents/Summary';
import EducationList from './resumeComponents/EducationList';

class Resume extends Component {
  render() {
    return (
      <div>
        <BasicInfo />
        <Summary />
        <EducationList />
      </div>
    );
  }
}

export default Resume;