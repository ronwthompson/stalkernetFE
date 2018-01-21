import React, { Component } from 'react'
import RaisedButton from './components/RaisedButton'
import MediaCard from './components/MediaCard'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
  }

  submitForm = async (e) => {
    e.preventDefault()
    let search = document.getElementById('searchValue').value
    const response = await fetch(`http://localhost:8000/faces/${search}`, {
      method: 'POST',
      body: JSON.stringify({ username: search }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    // const person = await response.json()
    // console.log(person)
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>StalkerNET</h1>
        </div>
        <div>
          <form onSubmit={ this.submitForm }>
            <input type='text' placeholder='Instagram Username' id='searchValue' />
            <RaisedButton submitForm={ this.submitForm }/>
          </form>
        </div>
        <div>
          <MediaCard />
        </div>
      </div>
    );
  }
}

export default App;
