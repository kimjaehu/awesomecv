
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RecipeReviewCard from './AdminJobCard.jsx'


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
render() {
  const { classes } = this.props;
  const jobData = this.props.recruiterData

  return (
    <Paper className={classes.paper}>

        <Grid container>
        {jobData && <RecipeReviewCard jobData={jobData}/>}




        </Grid>

    </Paper>
  );
}
}
Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);