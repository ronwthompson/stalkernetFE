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
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  componentWillMount(){
    setTimeout(() => {
      this.handleClickOpen()
    }, 1500)
  }

  render() {
    const { fullScreen } = this.props
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Identifying your target:"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <ul>
                <li>Go through each photo and checkmark each one that you are 100% certain is your target.</li>
                <li>You will need a minimum of 5 good photos for the process to work.</li>
                <li>Once you selected 20 photos, you do not need to select any more.  If you want to, though, go for it!</li>
                <li>Now you'll have to wait again.  We'll email you again when we've finished stalking your target so feel free to browse other parts of the internet.</li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
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