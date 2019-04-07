
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RecipeReviewCard from './AdminJobCard'


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
  }
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>

        <Grid container>
         <RecipeReviewCard />

        </Grid>

    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);