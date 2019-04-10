import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from './actions/LoginActions'
import { withRouter } from 'react-router-dom'

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
      errors:{}
    };
  }

  onClick = (e) => {
    e.preventDefault()
    if (this.state.email && this.state.password) {
      this.setState({ errors: {} })
      this.props.login(this.state).then(
        (res) => {
          console.log('login',res)
          this.setState({ user: res.data })
          localStorage.setItem('jwtToken',res.data.token)
          console.log('what is this.props',this.props)
          // this.props.history.push(`/applicant/${res.data.user.id}`)
          if (res.data.user_type === "candidate") {
          this.props.history.push(`/applicant/1`)
          } else {
            this.props.history.push(`/recruiter`)
          }
        },
        (err) => this.setState({ errors: "Wrong email or password" })
      )
    }

  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state

    return (
      <div className="Login">
        <form className={classes.container} noValidate autoComplete="off">
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



          <Button variant="contained" component="span" className= {classes.button} disabled={isLoading} onClick={this.onClick}>
            Login
          </Button>
          {/* {this.state.errors && <span>error</span>} */}
        </form>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

Main.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { login }) (withStyles(styles)(withRouter(Main)))