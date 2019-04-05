import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import { connect } from 'react-redux';
// import { login } from './actions/Login'

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
      errors:{},
      isLoading:false
    };
  }

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   if (this.isValid()) {
  //     this.setState({ errors:{}, isLoading: true })
  //     this.props.login(this.state).then(
  //       (res) => this.context.router.push('/'),
  //       (err) => this.setState({ errors: err.data.errors, isLoading:false })
  //     )
  //   }
  // }

  // onChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  render() {
    const { classes } = this.props;
    const { errors, email, password, isLoading } = this.state
    return (
      <div className="Login">
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-email-input"
            label="email"
            className={classes.textField}
            value={email}
            error={errors.email}
            onChange={this.onChange}
            margin="normal"
          />

          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.onChange}
            value={password}
            error={errors.password}
          />

          <Button variant="contained" component="span" className={classes.button} disabled={isLoading}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  // login: React.PropTypes.func.isRequired
};

// // Main.contextTypes = {
// //   router: React.PropTypes.object.isRequired
// }

// export default connect(null, { login }) (withStyles(styles)(Main));
export default withStyles(styles)(Main)