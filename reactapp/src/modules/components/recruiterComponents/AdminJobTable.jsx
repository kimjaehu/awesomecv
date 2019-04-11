import React from 'react';
import PropTypes from 'prop-types';

// Material-Ui
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Material-Ui Icons
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import SendIcon from '@material-ui/icons/Send';

// Views
import ApplicantDialog from './AdminJobApplicant.jsx';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
});

class SimpleTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // Applicant's CV Handler
  handleClickOpenApplicant = () => {
    this.setState({
      open: true,
    });
  };
  handleCloseApplicant = value => {
    this.setState({ selectedValue: value, open: false });
  };

  // JOB Card Handler
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  handleListItemClick = value => {
    this.props.onClose(value);
  };



  render() {
    const applicants = this.props.applicants? this.props.applicants:[]

    const { classes, onClose, selectedValue, ...other } = this.props;
    return (
      <Dialog
        maxWidth="md"
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
       <DialogTitle id="simple-dialog-title">Your Geeks</DialogTitle>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Candidate</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">View CV</TableCell>
              <TableCell align="center">Interview Invite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map(applicant => (
              <TableRow key={applicant.user.id}>
                <TableCell component="th" scope="row">
                  {applicant.user.email}
                </TableCell>
                <TableCell align="center">
                  {0}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="Add an alarm"
                    onClick={this.handleClickOpenApplicant}
                  >
                    <AssignmentInd />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="Add an alarm"
                    href="/admin"
                  >
                    <SendIcon />
                    <ApplicantDialog
                      open={this.state.open}
                      onCloseApplicant={this.handleCloseApplicant}
                      userid={applicant.user.id}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Dialog>
  )};
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);