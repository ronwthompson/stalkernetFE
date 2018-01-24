import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import RejectFace from './RejectFace'
import AcceptFace from './AcceptFace'
const bg = require('../testface.png')

const styles = {
  card: {
    maxWidth: 150,
  },
  media: {
    height: 150
  },
}

class SimpleMediaCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      reject: true,
      accept: false,
      acceptColor: '#e0e0e0',
      rejectColor: 'red'
    }
  }

  acceptClick = () => {
    if (!this.state.accept){
      this.setState(prev => {
        return {
        reject: false,
        accept: true,
        acceptColor: 'green',
        rejectColor: '#e0e0e0'
      }})
    }
  }

  rejectClick = () => {
    if (!this.state.reject){
      this.setState(prev => {
        return {
        reject: true,
        accept: false,
        acceptColor: '#e0e0e0',
        rejectColor: 'red'
      }})
    }
  }

  render(){
    const { classes } = this.props
    return (
      <div>
        <Card className={ classes.card }>
          <CardMedia
            className={ classes.media }
            image={ bg }
            title="Test Face"
          />
          <CardActions>
            <RejectFace click={ this.rejectClick } color={ this.state.rejectColor } />
            <AcceptFace click={ this.acceptClick } color={ this.state.acceptColor } />
          </CardActions>
        </Card>
      </div>
    )
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleMediaCard)