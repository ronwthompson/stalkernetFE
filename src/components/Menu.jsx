import React from 'react'
import LoggedOutMenu from './LoggedOutMenu'
import LoggedInMenu from './LoggedInMenu'
import Snackbar from './Snackbar'

class SimpleMenu extends React.Component {

  render() {
    return (
      <span>
      { this.props.state.loggedIn ? <LoggedInMenu state={this.props.state} /> : <LoggedOutMenu state={this.props.state} /> }
      <Snackbar state={this.props.state} />
      </span>
    )
  }
}

export default SimpleMenu