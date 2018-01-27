import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

class RaisedButton extends Component {
  render(){
    const { classes } = this.props
    return (
        <Button raised color="primary" className={classes.button} onClick={ this.props.submitForm }>
          Submit
        </Button>
      )
  }
}

RaisedButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RaisedButton)