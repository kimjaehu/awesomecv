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
    width: 300,
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
      password_confirmation:'',
      errors:{}
    };
  }

  onClick = (e) => {
    this.setState({ errors: {} })
    e.preventDefault()

    if (this.state.email && this.state.password && this.state.password_confirmation && this.state.password === this.state.password_confirmation) {
      this.props.userRegistrationRequest(this.state).then(
        () => {},
        ( {err} ) => this.setState({ errors: err })
      )  
    }

    
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  // onBlur = (e) => {
  //   if (this.state.password !== this.state.passwordConfirmation) {
  //     this.setState({ errors: { passwordConfirmation: "Password not matching" } })
  //   }
  // }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className="Login">
          <form className={classes.container}  noValidate autoComplete="off">
            <div>
              <TextField
                id="standard-email-input"
                label="email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.onChange}
                margin="normal"
                name="email"
              />
              
            </div>
            
            <div>
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
            </div>

            <div>
            <TextField
              id="standard-password-input"
              label="Re-type Password"
              className={classes.textField}
              type="password"
              margin="normal"
              onChange={this.onChange}
              value={this.state.password_confirmation}
              name="password_confirmation"
            />
            </div>
              
            <div>
              <Button variant="contained" className={classes.button} onClick={this.onClick} >
                register
              </Button>
            </div>
          </form>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  userRegistrationRequest: PropTypes.func.isRequired
};

// Main.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

// export default connect(null, { login }) (withStyles(styles)(Main));
export default withStyles(styles)(Main)