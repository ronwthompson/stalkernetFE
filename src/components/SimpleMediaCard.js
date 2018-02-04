import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import RejectFace from './RejectFace'
import AcceptFace from './AcceptFace'

const styles = {
  card: {
    maxWidth: 150,
    display: 'inline-block',
    margin: '10px 10px'
  },
  media: {
    height: 150
  }
}

class SimpleMediaCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      accept: false,
      acceptColor: '#e0e0e0',
      rejectColor: 'red'
    }
  }

  acceptClick = () => {
    this.props.state.quizState.quizClick(this.props['data-key'], true)
    if (!this.state.accept){
      this.setState(prev => {
        return {
        accept: true,
        acceptColor: 'green',
        rejectColor: '#e0e0e0'
      }})
    }
  }

  rejectClick = () => {
    this.props.state.quizState.quizClick(this.props['data-key'], false)
    if (this.state.accept){
      this.setState(prev => {
        return {
        accept: false,
        acceptColor: '#e0e0e0',
        rejectColor: 'red'
      }})
    }
  }

  render(){
    const { classes } = this.props
    return (
      <span>
        <Card className={ classes.card }>
          <img src={`${process.env.REACT_APP_API_URL}/images/${this.props.imageName}`} />
          <CardActions>
            <RejectFace click={ this.rejectClick } color={ this.state.rejectColor } />
            <AcceptFace click={ this.acceptClick } color={ this.state.acceptColor } />
          </CardActions>
        </Card>
      </span>
    )
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleMediaCard)