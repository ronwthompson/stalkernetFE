import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Snackbar from 'material-ui/Snackbar'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
})

class SimpleSnackbar extends React.Component {
  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.state.snackbarOpen}
          autoHideDuration={3000}
          onClose={this.props.state.stateFunctions.handleSnackbarClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.state.snackbarMessage}</span>}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SimpleSnackbar)