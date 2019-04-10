import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material-Ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// Material-Ui Icons
import PersonIcon from '@material-ui/icons/Person';

// Views Pages
import SimpleTable from './AdminJobTable.jsx';


const styles = theme => ({
  card: {
    maxWidth: 400,
    // width: `calc(100% - ${drawerWidth}px)`,

  },
  gridCard: {
    margin: 'auto',
    padding: 20,

  },
  cardTitle: {
    fontSize: 24,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

class RecipeReviewCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { classes } = this.props;
    const jobData = this.props.jobData
    const id = jobData.id
    const applicants = jobData.applicants? Object.keys(jobData.applicants).length:0
    const job_title = jobData.job_title
    const job_description = jobData.job_description
    const job_created_at = jobData.created_at? jobData.created_at.substr(0, 10):0


    return (
      <Grid alignContent="flex-start" className={classes.gridCard}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {id}
            </Avatar>
          }
          action={
            <IconButton aria-label="Cart">
              <Badge badgeContent={applicants} color="primary" classes={{ badge: classes.badge }}>
                <PersonIcon />
              </Badge>
            </IconButton>
          }
          title={job_title}
          subheader={`Post in ${job_created_at}`}
        />
        <CardMedia>
          {/*<AdminMap className="adminMap" />*/}
        </CardMedia>
        <CardContent>
          <Typography component="p">
            {job_description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>

          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Show me the Geeks
          </Button>
          <SimpleTable
            open={this.state.open}
            onClose={this.handleClose}
            applicants={jobData.applicants}
          />

        </CardActions>

      </Card>
      </Grid>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);