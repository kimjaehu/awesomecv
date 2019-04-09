
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Divider from '@material-ui/core/Divider';
import CheckboxesGroup from '../../forms/JobRequirementsForm.jsx'
import JobCompanyForm from '../../forms/JobCompanyForm.jsx'
import JobDescriptionForm from '../../forms/JobDescriptionForm.jsx'
import JobEducationForm from '../../forms/JobEducationForm.jsx'
import axios from 'axios';

const styles = theme => ({
  paper: {
    maxWidth: 924,
    margin: 'auto',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  topicField: {
    marginTop: 20,
  },
  formRow: {
    margin: 20,
  },
  button: {
    margin: theme.spacing.unit,
    width: 200,
    marginTop: 30,
    marginBottom: 30,
  },
});

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      job:  {
        job_category: '',
        job_title: '',
        job_level: '',
        job_description: '',
        city: '',
        province: '',
        country: '',
        postal_code: ''
      },
      company:  {
        company_name:' ',
        company_description: '',
        number_of_workers: ''
      },
      skills:  {
        language: {
          c: false,
          elixir: false,
          go: false,
          java: false,
          js: false,
          php: false,
          ruby: false,
          rust: false,
          swift: false,
          typescript: false
        },
        framework: {
          angular: false,
          django: false,
          express: false,
          node: false,
          rails: false,
          react: false,
          vue: false
        }
      },
      job_skills: {

      },
      job_educations:  {
        education_level: '',
        education_area: ''
      }
    }
  };

  jobHandler = (field) => {
    return (event) => {
      let job = this.state.job;
      job[field] = event.target.value;
      this.setState({job: job})
    }
  };

  cpnHandler = (field) => {
    return (event) => {
      let company = this.state.company;
      company[field] = event.target.value;
      this.setState({company: company})
    }
  };

  jobEducHandler = (field) => {
    return (event) => {
      let job_educations = this.state.job_educations;
      job_educations[field] = event.target.value;
      this.setState({job_educations: job_educations})
    }
  };

  languageHandler = (field) => {
    return (event) => {
      let language = this.state.skills.language
      language[field] = event.target.checked;
      this.setState({language: language})
    }
  };

  frameworkHandler = (field) => {
    return (event) => {
      let framework = this.state.skills.framework
      framework[field] = event.target.checked;
      this.setState({framework: framework})
    }
  };


  onClickHandler = (event) => {
    event.preventDefault();

    const job_skills = {};
    const language = this.state.language;
    const framework = this.state.framework;

    if (framework) {
      Object.keys(framework).forEach( function(skill) {
        if (framework[skill]) {
          job_skills[skill] = {
            area: 'framework',
            skill: skill
          }
        }
      });
    }

    if (language) {
      Object.keys(language).forEach( function(skill) {
        if (language[skill]) {
          job_skills[skill] = {
            area: 'language',
            skill: skill
          }
        }
      });
    }

    axios.post( 'http://localhost:3000/api/v1/users/1/jobs', {...this.state, job_skills})
      .then(response => {
          console.log(response)

      })
      .catch(error => {
          console.log(error)
    });
  };


  render() {
  const { classes } = this.props;

  return (
    <Paper className={classes.paper}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container>
          <Grid className={classes.formRow}>
            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                Job Details
              </Typography>
              <Divider/>
            </Grid>
            <Grid>
              <JobDescriptionForm detail={this.state.job} handler={this.jobHandler}/>
            </Grid>

            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                Candidate Education
              </Typography>
              <Divider/>
            </Grid>
            <Grid>
             <JobEducationForm education={this.state.job_educations} handler={this.jobEducHandler}/>
            </Grid>

            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                Job Requirements
              </Typography>
              <Divider/>
            </Grid>
            <Grid>
             <CheckboxesGroup sk={this.state.skills} lngHandler={this.languageHandler} fwHandler={this.frameworkHandler}/>
            </Grid>

            <Grid item xs className={classes.topicField}>
              <Typography variant="h6">
                The Company
              </Typography>
              <Divider/>
            </Grid>
            <Grid>
             <JobCompanyForm cpn={this.state.company} handler={this.cpnHandler}/>
            </Grid>

          <Button className={classes.button} variant="contained" color="primary" onClick={this.onClickHandler}>
            Submit
          </Button>

          </Grid>
        </Grid>
      </form>
    </Paper>
  )};
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);