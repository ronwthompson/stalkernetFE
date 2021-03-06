import React, { Component } from 'react'
import Menu from './components/Menu'
import SearchForm from './components/SearchForm'
import Quiz from './components/Quiz'
import Background from './components/Background'
import HowItWorks from './components/HowItWorks'
import PaperResults from './components/PaperResults'
import QuizStart from './components/QuizStart'
import Submission from './components/Submission'
import Intro from './components/Intro'
const incog = require('./video/logo.png')

const quizStyle = {
  width: '90%',
  textAlign: 'center',
  margin: 'auto'
}

const incogStyle = {
  position: 'fixed',
  height: "200px",
  bottom: 0,
  left: 0,
  zIndex: -2
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedIn: localStorage.getItem('stalker_token') ? true : false,
      registerOpen: false,
      loginOpen: false,
      snackbarOpen: false,
      submitMessageOpen: false,
      snackbarMessage: '',
      submitMessage: '',
      currentUser: {},
      submitForm: this.submitForm,
      stateFunctions: {
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
        handleLoginOpen: this.handleLoginOpen,
        handleLoginClose: this.handleLoginClose,
        handleSnackbarClose: this.handleSnackbarClose,
        submitClose: this.submitClose
      },
      quizState: {
        quizUsername: '',
        quizFaces: [],
        allStatus: [],
        quizClick: this.quizClick,
        submitQuiz: this.submitQuiz
      },
      results: new URL(window.location).searchParams.get('results')
    }
  }

  componentWillMount(){
    const verifyInfo = this.verifyToken()
    const getFaces = this.checkURIFaces()
  }

  componentWillUpdate(nextProps, nextState){
    return nextState.loggedIn = localStorage.getItem('stalker_token') ? true : false
  }

  verifyToken = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/current`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'auth': localStorage.getItem('stalker_token')
      }
    })
    const json = await response.json()
    this.setState(prev => {
      return {
        ...prev,
        currentUser: json.currentUser
      }
    })
    return json
  }

  checkURIFaces = async () => {
    const name = new URL(window.location).searchParams.get('quiz')
    if (name){
      const response = await fetch(`${process.env.REACT_APP_API_URL}/faces/${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const json = await response.json()
      this.setState(prev => {
      return {
        ...prev,
        quizState: {
          quizClick: this.quizClick,
          quizUsername: name,
          quizFaces: json,
          allStatus: Array(json.length).fill(false),
          submitQuiz: this.submitQuiz
        }
      }
    })
      return json
    }
  }

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
      this.setState({ snackbarOpen: true, loginOpen: false, snackbarMessage: `Logged in.  Welcome ${username}!` })
      const verifyInfo = this.verifyToken()
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

  submitClose = () => {
    this.setState({ submitMessageOpen: false })
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ snackbarOpen: false })
  }

  quizClick = (index, status) => {
    this.state.quizState.allStatus.splice(index, 1, status)
  }

  submitQuiz = async () => {
    console.log('???')
    const quizResults = {
      username: this.state.quizState.quizUsername,
      files: this.state.quizState.quizFaces,
      accepted: this.state.quizState.allStatus,
      email: this.state.currentUser.email
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/faces/quiz/${this.state.quizState.quizUsername}`, {
      method: 'POST',
      body: JSON.stringify(quizResults),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const json = await response.json()
    this.setState({ submitMessageOpen: true, submitMessage: json.message })
  }

  submitForm = async (e) => {
    e.preventDefault()
    let search = document.getElementById('name-simple').value
    const response = await fetch(`${process.env.REACT_APP_API_URL}/faces/instagram/${search}`, {
      method: 'POST',
      body: JSON.stringify({ email: this.state.currentUser.email }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const json = await response.json()
    this.setState({ submitMessageOpen: true, submitMessage: json.message })
  }

  render() {
    return (
      <div>
        <Menu state={this.state} />
        { this.state.loggedIn ? 
              this.state.results ? <span><PaperResults state={ this.state } /><img src={incog} style={incogStyle} /></span> : 
                  this.state.quizState.quizUsername ? <div style={ quizStyle }><img src={incog} style={incogStyle} /><Quiz state={ this.state } /><QuizStart /><Submission state={ this.state } /></div> : 
                      <div><img src={incog} style={incogStyle} /><SearchForm state={ this.state }/><HowItWorks /><Submission state={ this.state } /></div>
          : <div><Background /><Intro /></div> }
      </div>
    )
  }
}

export default App
