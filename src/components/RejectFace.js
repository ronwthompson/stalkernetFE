import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import ClearIcon from 'material-ui-icons/Clear'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

class RejectIcon extends Component {
  render(){
    const { classes } = this.props;
    return (
        <IconButton className={classes.button} aria-label="Reject" style={{ color: this.props.color }} >
          <ClearIcon onClick={ this.props.click } />
        </IconButton>
    )
  }
}

RejectIcon.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RejectIcon);