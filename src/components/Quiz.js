import React, { Component } from 'react';
import MediaCard from './SimpleMediaCard'
import Button from 'material-ui/Button'
const path = require('path')

const style = {
  color: "#777777"
}

class Quiz extends Component {

  render(){
    const username = this.props.state.quizState.quizUsername
    const faces = this.props.state.quizState.quizFaces
    return (
      <div>
      <p style={ style }>Please check which faces are your intended target.</p>
      {faces.map((e,i) => {
                const filePath = e.split('/')
                const imageName = path.join(filePath[filePath.length-3],filePath[filePath.length-2],filePath[filePath.length-1])
                return <MediaCard state={ this.props.state } key={ i } data-key={ i } imageName={ imageName } data-user={ username } picture={ path.join(...filePath) } />
              })}
      <div>
        <Button onClick={this.props.state.quizState.submitQuiz}>All Done!</Button>
      </div>
      </div>
    )
  }
}

export default Quiz