import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import axios from "axios";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  input: {
    display: 'none',
  },
  paper:{
    margin: theme.spacing.unit,
  }
});


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation:''
    };
  }

  onClick = (e) => {
    e.preventDefault()
    // axios.post('api/v1/users', { user: this.state })
    this.props.userRegistrationRequest(this.state)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className="Login">
      <Paper className={classes.paper} elevation={1}>
        <form className={classes.container}  noValidate autoComplete="off">
          <TextField
            id="standard-email-input"
            label="email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.onChange}
            margin="normal"
            name="email"
          />

          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
            onChange={this.onChange}
            value={this.state.password}
            name="password"
          />
          <TextField
            id="standard-password-input"
            label="Re-type Password"
            className={classes.textField}
            type="password"
            margin="normal"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            name="passwordConfirmation"
          />
          <div>
            <Button variant="contained" className={classes.button} onClick={this.onClick} >
              register
            </Button>
          </div>
          
        </form>
        
        </Paper>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  userRegistrationRequest: PropTypes.func.isRequired
};

// // Main.contextTypes = {
// //   router: React.PropTypes.object.isRequired
// }

// export default connect(null, { login }) (withStyles(styles)(Main));
export default withStyles(styles)(Main)