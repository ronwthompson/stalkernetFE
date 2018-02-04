import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog'

class ResponsiveDialog extends React.Component {

  render() {
    const { fullScreen } = this.props
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.props.state.submitMessageOpen}
          onClose={this.props.state.stateFunctions.submitClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.state.submitMessage}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Now what?  Well... you have to wait.  This shouldn't take more than an hour but I don't expect you to stick around for that long.  You can close this window and we'll email you when we're ready for the next step.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.state.stateFunctions.submitClose} color="primary" autoFocus>
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
}

export default withMobileDialog()(ResponsiveDialog)