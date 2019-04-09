import React, { Component } from 'react';
import Education from './Education'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const styles = theme => ({
  container: {
    maxWidth: 924,
    margin: 'auto',
    overflow: 'hidden',
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

class EducationList extends Component {

  constructor(props) {
    super(props);
    // this.props.education[i] = {
    //   id:i,
    //   schoolName: '',
    //   schoolFrom: '',
    //   schoolTo: '',
    //   degree: ''
    // }
    this.state = {
      education:0
    }  
  }

  addEducation = () => {
    let i = this.state.education;
    i++;
    this.props.education[i] = {
      id:i,
      schoolName: '',
      schoolFrom: '',
      schoolTo: '',
      degree: ''
    }
    this.props.edit(this.props.education);
    this.props.education[i].deleteEducation = () => {
      delete this.props.education[i];
      this.props.edit(this.props.education);

    };

  this.setState({education: i});
  
  }

  initialFill = () => {

  }

  // componentDidMount(){
  //   axios.get('/api/v1/users/1/profiles')
  //   .then(res => {
  //     console.log(res)
  //     res.data.educations.map( edu => {
  //       console.log('console edu',edu)
        
  //       let i = this.state.education;
  //       i++;
  //       this.props.education[i] = {
  //         id:i,
  //         schoolName: edu.school_name,
  //         schoolFrom: edu.degree,
  //         schoolTo: edu.start_date,
  //         degree: edu.end_date
  //       }

  //       console.log('this.props.education',this.props.education)
  //       this.props.edit(this.props.education);
  //       this.props.education[i].deleteEducation = () => {
  //         delete this.props.education[i];
  //         this.props.edit(this.props.education);

  //       };

  //     this.setState({education: i});
  //       console.log('this.state',this.state)
  //       // this.props.education[i] =
  //       // {
  //       //   id:i,
  //       //   schoolName: edu.school_name,
  //       //   degree: edu.degree,
  //       //   schoolFrom: edu.start_date,
  //       //   SchoolTo: edu.end_date
  //       // }
  //     })
  //   }).catch(err => {
      
  //   })
  // }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Education </h2>
        { Object.keys(this.props.education).map(i => 
            <Education key={i} education={this.props.education} educationVal={this.props.education[i]}/>)}
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addEducation }>
          Add an Education
        </Button>
      </div>
    );
  }
}
EducationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationList);