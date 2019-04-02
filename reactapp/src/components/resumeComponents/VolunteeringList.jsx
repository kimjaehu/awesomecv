import React, { Component } from 'react';
import Volunteering from './Volunteering'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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

class VolunteeringList extends Component {

  constructor(props) {
    super(props);
    // this.props.volunteering[i] = {
    //   id:i,
    //   volunteeringName: '',
    //   volunteeringTitle: '',
    //   volunteeringLocation:'',
    //   volunteeringFrom: '',
    //   volunteeringTo: ''
    // }
    this.state = {
      volunteering:0
    }  
  }

  addVolunteering = () => {
    let i = this.state.volunteering;
    i++;
    this.props.volunteering[i] = {
      id:i,
      volunteeringName: '',
      volunteeringTitle: '',
      volunteeringLocation:'',
      volunteeringFrom: '',
      volunteeringTo: ''
    }
    this.props.edit(this.props.volunteering);
    this.props.volunteering[i].deleteVolunteering = () => {
      delete this.props.volunteering[i];
      this.props.edit(this.props.volunteering);

    };

  this.setState({volunteering: i});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Volunteering </h2>
        { Object.keys(this.props.volunteering).map(i => 
            <Volunteering key={i} volunteering={this.props.volunteering} volunteeringVal={this.props.volunteering[i]}/>)}
        <Button variant="outlined" color="primary" className={classes.button } onClick={ this.addVolunteering}>
          Add an Volunteering
        </Button>
      </div>
    );
  }
}
VolunteeringList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VolunteeringList);