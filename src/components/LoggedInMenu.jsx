import React from 'react'
import Button from 'material-ui/Button'

class LoggedInMenu extends React.Component {
  render() {
    return (
      <div>
        <Button>Quizzes</Button>
        <Button>My Account</Button>
        <Button onClick={this.props.state.stateFunctions.logoutUser}>Log Out</Button>
      </div>
    )
  }
}

export default LoggedInMenu