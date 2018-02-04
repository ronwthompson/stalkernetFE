import React from 'react'
import Login from './Login'
import Register from './Register'

class LoggedOutMenu extends React.Component {

  render() {
    return (
      <div className="loginButtons">
          <Login state={this.props.state} />
          <Register state={this.props.state} />
      </div>
    )
  }
}

export default LoggedOutMenu