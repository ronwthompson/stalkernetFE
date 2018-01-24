import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog'


export default class LoginRegister extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.state.stateFunctions.handleLoginOpen}>Log In</Button>
        <Dialog
          open={this.props.state.loginOpen}
          onClose={this.props.state.stateFunctions.handleLoginClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.state.stateFunctions.handleLoginClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.state.stateFunctions.loginUser} color="primary">
              Log In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}