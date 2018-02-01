import React from 'react'
import Button from 'material-ui/Button'

const style = {
    position: "fixed",
    height: "36px",
    width: "95px",
    top: 0,
    right: 0
}

class LoggedInMenu extends React.Component {
  render() {
    return (
      <div style={style}>
        <Button onClick={this.props.state.stateFunctions.logoutUser}>Log Out</Button>
      </div>
    )
  }
}

export default LoggedInMenu