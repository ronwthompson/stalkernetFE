import React, { Component } from 'react';
import MediaCard from './SimpleMediaCard'
const path = require('path')

class Quiz extends Component {

  render(){
    const username = this.props.state.quizState.quizUsername
    const faces = this.props.state.quizState.quizFaces
    return (
      <div>
      <p>Please check which faces are your intended target.</p>
      {faces.map((e,i) => {
                const filePath = e.split('/')
                const imageName = filePath[filePath.length-1]
                return <MediaCard state={ this.props.state } key={ i } data-key={ i } imageName={ imageName } data-user={ username } picture={ path.join(...filePath) } />
              })}
      </div>
    )
  }
}

export default Quiz