// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import QueryString from 'query-string';
// import  LinkedInPopUp  from './LinkedInPopUp';
// import LinkedInPage from './LinkedInPage';


// class LinkedinTest extends Component {

//   state = {
//     code: '',
//     errorMessage: '',
//   }



//   linkedinValueHandler = (field) => {
//     return (event) => {
//       let linkedinValue = this.state;
//       linkedinValue[field] = event.target.value;
//       this.setState({linkedinValue: linkedinValue})
//       this.props.linkedinVal[field] = this.state[field]
      
      
//     }
//   }

//   render() {
//     const params = QueryString.parse(window.location.search);
//     if (params.code || params.error) {
//       return (
//         <LinkedInPopUp />
//       );
//     }
//     return (
//       <LinkedInPage linkedin={this.props.linkedin}/>
//     );
//   }
// }

// export default LinkedinTest;