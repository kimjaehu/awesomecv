import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class CheckboxesGroup extends React.Component {

  render() {
    const { classes } = this.props;
    const { language, framework } = this.props.sk;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Languages</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.c}
                  onChange={this.props.lngHandler('c')}
                  value="c"
                />
              }
              label="C#"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.elixir}
                  onChange={this.props.lngHandler('elixir')}
                  value="elixir"
                />
              }
              label="Elixir"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.go}
                  onChange={this.props.lngHandler('go')}
                  value="go"
                />
              }
              label="Go"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.java}
                  onChange={this.props.lngHandler('java')}
                  value="java"
                />
              }
              label="Java"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.js}
                  onChange={this.props.lngHandler('js')}
                  value="js"
                />
              }
              label="JavaScript"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.php}
                  onChange={this.props.lngHandler('php')}
                  value="php"
                />
              }
              label="PHP"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.python}
                  onChange={this.props.lngHandler('python')}
                  value="python"
                />
              }
              label="Python"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.ruby}
                  onChange={this.props.lngHandler('ruby')}
                  value="ruby"
                />
              }
              label="Ruby"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.rust}
                  onChange={this.props.lngHandler('rust')}
                  value="rust"
                />
              }
              label="Rust"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.swift}
                  onChange={this.props.lngHandler('swift')}
                  value="swift"
                />
              }
              label="Swift"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={language.typescript}
                  onChange={this.props.lngHandler('typescript')}
                  value="typescript"
                />
              }
              label="TypeScript"
            />
          </FormGroup>
          <FormHelperText>Select at least one</FormHelperText>
        </FormControl>


        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Frameworks</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.angular}
                  onChange={this.props.fwHandler('angular')}
                  value="angular"
                />
              }
              label="Angular"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.django}
                  onChange={this.props.fwHandler('django')}
                  value="django"
                />
              }
              label="Django"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.express}
                  onChange={this.props.fwHandler('express')}
                  value="express"
                />
              }
              label="Express"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.node}
                  onChange={this.props.fwHandler('node')}
                  value="node"
                />
              }
              label="Node"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.rails}
                  onChange={this.props.fwHandler('rails')}
                  value="rails"
                />
              }
              label="Rails"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.react}
                  onChange={this.props.fwHandler('react')}
                  value="react"
                />
              }
              label="React"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={framework.vue}
                  onChange={this.props.fwHandler('vue')}
                  value="vue"
                />
              }
              label="Vue"
            />
          </FormGroup>
          <FormHelperText>Select at least one</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);