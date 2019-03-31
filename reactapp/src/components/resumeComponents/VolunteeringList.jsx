import React, { Component } from 'react';
import Volunteering from './Volunteering'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

let i = 0;

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
    this.props.volunteering[i] = {
      id:i,
      volunteeringName: '',
      volunteeringTitle: '',
      volunteeringLocation:'',
      volunteeringFrom: '',
      volunteeringTo: ''
    }
    this.state = {
      volunteering:1,
      form: [<Volunteering key={i} volunteeringVal={this.props.volunteering[i]} />]
    }  
  }

  VolunteeringAddHandler = () => {

  }

  addVolunteering = () => {
    let rr = this.state.form;
    i++;
    this.props.volunteering[i] = {
      id:i,
      volunteeringName: '',
      volunteeringTitle: '',
      volunteeringLocation:'',
      volunteeringFrom: '',
      volunteeringTo: ''
    }
    rr.push(<Volunteering key={i} volunteering={this.props.volunteering} volunteeringVal={this.props.volunteering[i]} volunteeringElm={this.state.form}/>)

    this.setState({ form: rr} )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Volunteering </h2>
          { this.state.form.map( emp => emp) }
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