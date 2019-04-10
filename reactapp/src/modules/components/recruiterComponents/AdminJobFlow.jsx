
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RecipeReviewCard from './AdminJobCard.jsx'
import axios from 'axios';

const styles = theme => ({
  paper: {
    maxWidth: 924,
    // height = 100%,
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
  }
});

class Content extends React.Component {

  constructor(props) {
      super(props);
      this.state = {recruiterData: []};
    }

  componentDidMount(){
    axios.get('http://localhost:3000/api/v1/users/3/jobs')
    .then(response => {
      this.setState({ recruiterData: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  tabRow(){

    if (this.state.recruiterData.length) {
      return this.state.recruiterData.map(function(object, i){
            return <RecipeReviewCard jobData={object} />;
        });
    } else {
      return <RecipeReviewCard jobData={this.state.recruiterData} />;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
          <Grid container>
            {this.tabRow()}
          </Grid>
      </Paper>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);




