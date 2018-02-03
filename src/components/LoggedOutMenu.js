import React from 'react'
import Login from './Login'
import Register from './Register'

const style = {
    position: "fixed",
    height: "36px",
    width: "200px",
    top: "40vh",
    right: "calc(50% - 100px)",
    textAlign: "center"
}

class LoggedOutMenu extends React.Component {

  render() {
    return (
      <div style={style}>
          <Login state={this.props.state} />
          <Register state={this.props.state} />
      </div>
    )
  }
}

export default LoggedOutMenu