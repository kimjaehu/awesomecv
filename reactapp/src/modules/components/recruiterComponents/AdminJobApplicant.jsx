import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';

const styles = {

};

class ApplicantDialog extends React.Component {

  handleClose = () => {
    this.props.onCloseApplicant(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onCloseApplicant(value);
  };

  componentDidMount(){
    axios.get(`http://localhost:3000/api/v1/users/${this.props.userid}`)
    .then(response => {
      this.setState({ recruiterData: response.data });
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">KEEP CALM...WE HAVE TIME...</DialogTitle>
        <div>

        </div>
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