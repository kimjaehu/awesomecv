import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import SendIcon from '@material-ui/icons/Send';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// assignment_ind

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


class SimpleTable extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };



  render() {

    const { classes, onClose, selectedValue, ...other } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
       <DialogTitle id="simple-dialog-title">Your Candidates</DialogTitle>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Candidate</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">View CV</TableCell>
              <TableCell align="center">Interview Invite</TableCell>
              <TableCell align="center">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  {row.carbs}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="Add an alarm"
                    href="/admin"
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
                  </IconButton>
                </TableCell>
                <TableCell align="center">{row.protein}</TableCell>
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