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

// test url
// ?quiz=beyonce&faces=WyIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTNfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTRfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTVfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTZfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTEwXzAucG5nIiwiL2hvbWUvdWJ1bnR1L3B1YmxpY19odG1sL2J1aWxkL3N0YWxrZXJuZXRCRS9zcmMvZmFjZUltYWdlcy9iZXlvbmNlL2ZhY2VzL2ZhY2UxMV8wLnBuZyIsIi9ob21lL3VidW50dS9wdWJsaWNfaHRtbC9idWlsZC9zdGFsa2VybmV0QkUvc3JjL2ZhY2VJbWFnZXMvYmV5b25jZS9mYWNlcy9mYWNlMTRfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTE1XzAucG5nIiwiL2hvbWUvdWJ1bnR1L3B1YmxpY19odG1sL2J1aWxkL3N0YWxrZXJuZXRCRS9zcmMvZmFjZUltYWdlcy9iZXlvbmNlL2ZhY2VzL2ZhY2UxN18wLnBuZyIsIi9ob21lL3VidW50dS9wdWJsaWNfaHRtbC9idWlsZC9zdGFsa2VybmV0QkUvc3JjL2ZhY2VJbWFnZXMvYmV5b25jZS9mYWNlcy9mYWNlMTlfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTIwXzAucG5nIiwiL2hvbWUvdWJ1bnR1L3B1YmxpY19odG1sL2J1aWxkL3N0YWxrZXJuZXRCRS9zcmMvZmFjZUltYWdlcy9iZXlvbmNlL2ZhY2VzL2ZhY2UyN18wLnBuZyIsIi9ob21lL3VidW50dS9wdWJsaWNfaHRtbC9idWlsZC9zdGFsa2VybmV0QkUvc3JjL2ZhY2VJbWFnZXMvYmV5b25jZS9mYWNlcy9mYWNlMjhfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTI5XzAucG5nIiwiL2hvbWUvdWJ1bnR1L3B1YmxpY19odG1sL2J1aWxkL3N0YWxrZXJuZXRCRS9zcmMvZmFjZUltYWdlcy9iZXlvbmNlL2ZhY2VzL2ZhY2UzMV8wLnBuZyIsIi9ob21lL3VidW50dS9wdWJsaWNfaHRtbC9idWlsZC9zdGFsa2VybmV0QkUvc3JjL2ZhY2VJbWFnZXMvYmV5b25jZS9mYWNlcy9mYWNlMzRfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTQxXzAucG5nIiwiL2hvbWUvdWJ1bnR1L3B1YmxpY19odG1sL2J1aWxkL3N0YWxrZXJuZXRCRS9zcmMvZmFjZUltYWdlcy9iZXlvbmNlL2ZhY2VzL2ZhY2U0MV8xLnBuZyIsIi9ob21lL3VidW50dS9wdWJsaWNfaHRtbC9idWlsZC9zdGFsa2VybmV0QkUvc3JjL2ZhY2VJbWFnZXMvYmV5b25jZS9mYWNlcy9mYWNlNDVfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTQ1XzEucG5nIiwiL2hvbWUvdWJ1bnR1L3B1YmxpY19odG1sL2J1aWxkL3N0YWxrZXJuZXRCRS9zcmMvZmFjZUltYWdlcy9iZXlvbmNlL2ZhY2VzL2ZhY2U0Nl8wLnBuZyIsIi9ob21lL3VidW50dS9wdWJsaWNfaHRtbC9idWlsZC9zdGFsa2VybmV0QkUvc3JjL2ZhY2VJbWFnZXMvYmV5b25jZS9mYWNlcy9mYWNlNTNfMC5wbmciLCIvaG9tZS91YnVudHUvcHVibGljX2h0bWwvYnVpbGQvc3RhbGtlcm5ldEJFL3NyYy9mYWNlSW1hZ2VzL2JleW9uY2UvZmFjZXMvZmFjZTU0XzAucG5nIl0=