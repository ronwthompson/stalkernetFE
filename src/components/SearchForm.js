import React, { Component } from 'react'
import RaisedButton from './RaisedButton'

class SearchForm extends Component {
  constructor(props){
    super(props)
  }

  submitForm = async (e) => {
    e.preventDefault()
    let search = document.getElementById('searchValue').value
    const response = await fetch(`${process.env.REACT_APP_API_URL}/faces/instagram/${search}`, {
      method: 'POST',
      body: JSON.stringify({ username: search }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>StalkerNET</h1>
        </div>
        <div>
          <form onSubmit={ this.submitForm }>
            <input type='text' placeholder='Instagram Username' id='searchValue' />
            <RaisedButton submitForm={ this.submitForm }/>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
