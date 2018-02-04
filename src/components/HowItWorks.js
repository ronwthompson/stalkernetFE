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
          <DialogTitle id="responsive-dialog-title">{"How This Works:"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <ol>
                <li>Enter a person's Instagram ID (without the @) into the search bar and submit.</li>
                <li>Wait for a bit.  You'll get an email from us when we're ready to ID your subject.</li>
                <li>Once you get an email from us, click it to verify the faces we've found.  Be sure to only select the faces that you are 100% are your subject!</li>
                <li>Now you'll have to wait again.  We'll email you again when we've finished stalking your target.</li>
                <li>In this last email, you'll have a link to a report of everything we've found on your target.  Enjoy the fruits of our labor!</li>
              </ol>
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