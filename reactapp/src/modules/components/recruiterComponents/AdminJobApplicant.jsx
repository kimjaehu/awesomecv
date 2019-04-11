import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = {
  card: {
    maxWidth: 900,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

};

class ApplicantDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recruiterData: null
    };
  }

  handleClose = () => {
    this.props.onCloseApplicant(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onCloseApplicant(value);
  };

  componentDidMount(){
    // axios.get(`http://localhost:3000/api/v1/users/${this.props.userid}`)
    axios.get("http://localhost:3000/api/v1/users/2")
    .then(response => {
      this.setState({ recruiterData: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })

    if (this.state.recruiterData) {this.state.recruiterData.educations.map(educ => (console.log(educ)))}
  }




  name(){
    if (this.state.recruiterData) {
      let applicant = this.state.recruiterData
        return <DialogTitle id="simple-dialog-title">{applicant.profile.first_name} {applicant.profile.last_name}</DialogTitle>;
    }
  }


  aboutme(){
    if (this.state.recruiterData) {
      let applicant = this.state.recruiterData
        return <DialogTitle id="simple-dialog-title">{applicant.profile.first_name} {applicant.profile.last_name}</DialogTitle>;
    }
  }


   educations(){

    if (this.state.recruiterData) {
      const applicant = this.state.recruiterData
      // return this.state.recruiterData.map(function(applicant){
            return <DialogTitle id="simple-dialog-title">{applicant.profile.first_name} {applicant.profile.last_name}</DialogTitle>;
        // });
    }
    // else {
    //   return <RecipeReviewCard jobData={this.state.recruiterData} />;
    // }
  }







  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    let applicant = this.state.recruiterData? this.state.recruiterData:false




    return (
      <Dialog
        maxWidth='xl'
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >





        {this.name()}





              <Card className={classes.card}>





                {applicant && <CardHeader
                                  avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                      Info
                                    </Avatar>
                                  }
                                  title={applicant.email}
                                  subheader={`${applicant.profile.street_address}, ${applicant.profile.city}`}
                                />}







                <CardContent>
                  <Typography variant="button" gutterBottom>
                    About Me
                  </Typography>
                  {applicant &&
                    <Typography component="p">
                    {applicant.about_me.description}
                  </Typography>
                  }
                </CardContent>




                <CardContent>
                  <Typography variant="button" gutterBottom>
                    Carrer
                  </Typography>


                <Table>
          <TableHead>
            <TableRow>
              <TableCell >Job Title</TableCell>
              <TableCell >Job Level</TableCell>
              <TableCell >Month In</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {applicant && applicant.carrers.map(carrer => (

              <TableRow>
                <TableCell >
                  {carrer.job_title}
                </TableCell>
                <TableCell >
                  {carrer.seniority}
                </TableCell>
                <TableCell >
                  {carrer.month_experience}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>


                </CardContent>


                <CardContent>
                  <Typography variant="button" gutterBottom>
                    Education
                  </Typography>


                  <Table>
          <TableHead>
            <TableRow>
              <TableCell >School Name</TableCell>
              <TableCell >Degree</TableCell>
              <TableCell >Start Date</TableCell>
              <TableCell >End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicant && applicant.educations.map(educ => (

              <TableRow>
                <TableCell >
                  {educ.school_name}
                </TableCell>
                <TableCell >
                  {educ.degree}
                </TableCell>
                <TableCell >
                  {educ.start_date}
                </TableCell>
                <TableCell >
                  {educ.end_date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>






                </CardContent>



              </Card>









      </Dialog>
    );
  }
}

ApplicantDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(ApplicantDialog)