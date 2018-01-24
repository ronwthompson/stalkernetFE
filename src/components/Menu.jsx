import React from 'react';
import Login from './Login'
import Register from './Register'
import LoggedInMenu from './LoggedInMenu'
import Snackbar from './Snackbar'

class SimpleMenu extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
      { this.props.state.loggedIn ? <LoggedInMenu state={this.props.state} /> : <div><Login state={this.props.state} /><Register state={this.props.state} /></div> }
      <Snackbar state={this.props.state} />
      </div>
    )
  }
}

export default SimpleMenu