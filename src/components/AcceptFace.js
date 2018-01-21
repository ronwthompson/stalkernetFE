import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import DoneIcon from 'material-ui-icons/Done'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

class AcceptIcon extends Component {
  render(){
    const { classes } = this.props
    return (
        <IconButton className={classes.button} aria-label="Accept" style={{ color: this.props.color }} >
          <DoneIcon onClick={ this.props.click } />
        </IconButton>
    )
  }
}

AcceptIcon.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AcceptIcon);