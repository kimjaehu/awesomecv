// import React, { Component } from 'react';
// import { LinkedIn } from 'react-linkedin-login-oauth2';
// import axios from 'axios';
// import jsonp from 'jsonp';
// import $ from 'jquery';

// const LINKEDIN_KEY = process.env.REACT_APP_LINKEDIN_KEY

// class LinkedInPage extends Component {
//   state = {
//     code: '',
//     errorMessage: '',
//   };


//   handleSuccess = (data) => {
//     this.setState({
//       code: data.code,
//       errorMessage: '',
//     });

//     axios.post('http://localhost:3000/users/linkedin',{
//       code: this.state.code,
//       errorMessage: 'this.state.errorMessage'
//     }).then((response) => {
//       console.log(response)
//     }).catch((error) => {
//       console.log(error)
//     })
    
//     const headers = {
//       'Authorization': `Bearer ${this.state.code}`,
//     'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
//     'Access-Control-Allow-Origin':'*',
//     'Access-Control-Request-Headers':'Origin, X-Requested-With, Content-Type, Accept',
//     'Content-Type':'application/x-www-form-urlencoded'
//     }
//     const linkedinUrl = 'https://api.linkedin.com/v1/people/~:(id,first-name,email-address,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer)?format=json'
//       // axios.get(linkedinUrl, { headers })
//       // .then(res => {
//       //   console.log(res);
//       //   console.log(res.data);
//       // })
//       // .catch((error) => {
//       //   console.log('error ' + error)
//       // })
//       // jsonp('https://api.linkedin.com/v2/me', null, (err, data) => {
//       //   if (err) {
//       //     console.log(err)
//       //   } else {
//       //     console.log(data)
//       //   }
//       // })
//       // $.ajax({url: 'https://api.linkedin.com/v2/me',
//       //   type:'GET',
//       //   contentType: "application/json",
//       //   headers: headers,
//       //   dataType: "jsonp",
//       //   success: function(data){
//       //     console.log(data)
//       //   },
//       //   error: function(err){
//       //     console.log(err)
//       //   }
//       // })
//   }

//   handleFailure = (error) => {
//     this.setState({
//       code: '',
//       errorMessage: error.errorMessage,
//     });
//   }
  
//   render() {
//     const { code, errorMessage } = this.state;
//     return (
//       <div> Fill out with &nbsp;
//         <LinkedIn
//           clientId={LINKEDIN_KEY}
//           onFailure={this.handleFailure}
//           onSuccess={this.handleSuccess}
//           redirectUri="http://localhost:3006/users/linkedin"
//         >
//           <div> 
//             <img src={require('./assets/linkedin.png')} alt="Fill out with LinkedIn" style={{ maxWidth: '100px' }} />
//           </div>
            
//         </LinkedIn>
//         {errorMessage && <div>{errorMessage}</div>}
//       </div>
//     );
//   }
// }

// export default LinkedInPage;