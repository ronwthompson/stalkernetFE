import React, { Component } from 'react'
import Menu from './components/Menu'
import SearchForm from './components/SearchForm'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedIn: localStorage.getItem('stalker_token') ? true : false,
      registerOpen: false,
      loginOpen: false,
      snackbarOpen: false,
      snackbarMessage: '',
      currentUser: '',
      stateFunctions: {
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
        handleLoginOpen: this.handleLoginOpen,
        handleLoginClose: this.handleLoginClose,
        handleSnackbarClose: this.handleSnackbarClose
      }
    }
  }

  componentWillUpdate(nextProps, nextState){
    // const verifyInfo = this.verifyToken()
    // nextState.loggedIn = verifyInfo.currentUser === 'guest' ? false : true
    return nextState.loggedIn = localStorage.getItem('stalker_token') ? true : false
  }

  // verifyToken = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/current`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'auth': localStorage.getItem('stalker_token')
  //     }
  //   })
  //   const json = await response.json()
  //   console.log(json)
  //   return json
  // }

  loginUser = async () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const json = await response.json()
    if (json.authorization) {
      localStorage.setItem('stalker_token', json.authorization)
      this.setState({ snackbarOpen: true, loginOpen: false, snackbarMessage: `Logged in.  Welcome ${username}!`, currentUser: username })
    } else if (json.message) {
      this.setState({ snackbarOpen: true, snackbarMessage: json.message })
    }
  }

  logoutUser = () => {
    localStorage.removeItem("stalker_token")
    this.setState({
      loggedIn: false,
      currentUser: ''
    })
  }

  handleLoginOpen = () => {
    this.setState({ loginOpen: true })
  }

  handleLoginClose = () => {
    this.setState({ loginOpen: false })
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ snackbarOpen: false })
  }

  render() {
    return (
      <div>
        <Menu state={this.state} />
        { this.state.loggedIn ? <SearchForm /> : <div></div> }
      </div>
    )
  }
}

export default App
