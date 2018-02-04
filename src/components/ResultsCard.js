import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import classNames from 'classnames'

const styles = theme => ({
  card: {
    width: 200,
    textAlign: "center",
    backgroundColor: "#333333"
  },
  title: {
    marginBottom: 16,
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    display: "inline-block"
  }
})

class SimpleCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      link: '',
      photo: ''
    }
  }

  componentWillMount(){
    switch(this.props.card){
      case 'Facebook':
        this.setState({
          link: `http://www.facebook.com/${this.props.state.facebook}`,
          photo: this.props.state.facebook_image
        })
        break
      case 'Flickr':
        this.setState({
          link: `http://www.flickr.com/${this.props.state.flickr}`,
          photo: this.props.state.flickr_image
        })
        break
      case 'Foursquare':
        this.setState({
          link: `http://www.foursquare.com/${this.props.state.foursquare}`,
          photo: this.props.state.foursquare_image
        })
        break
      case 'Goodreads':
        this.setState({
          link: `http://www.goodreads.com/${this.props.state.goodreads}`,
          photo: this.props.state.goodreads_image
        })
        break
      case 'GooglePlus':
        this.setState({
          link: `http://plus.google.com/${this.props.state.googleplus}`,
          photo: this.props.state.googleplus_image
        })
        break
      case 'Instagram':
        this.setState({
          link: `http://www.instagram.com/${this.props.state.instagram}`,
          photo: this.props.state.instagram_image
        })
        break
      case 'LinkedIn':
        this.setState({
          link: `http://www.linkedin.com/in/${this.props.state.linkedin}`,
          photo: this.props.state.linkedin_image
        })
        break
      case 'Livejournal':
        this.setState({
          link: `http://www.livejournal.com/${this.props.state.livejournal}`,
          photo: this.props.state.livejournal_image
        })
        break
      case 'Meetup':
        this.setState({
          link: `http://www.meetup.com/${this.props.state.meetup}`,
          photo: this.props.state.meetup_image
        })
        break
      case 'Myspace':
        this.setState({
          link: `http://www.myspace.com/${this.props.state.myspace}`,
          photo: this.props.state.myspace_image
        })
        break
      case 'Pinterest':
        this.setState({
          link: `http://www.pinterest.com/${this.props.state.pinterest}`,
          photo: this.props.state.pinterest_image
        })
        break
      case 'Tumblr':
        this.setState({
          link: `http://www.tumblr.com/${this.props.state.tumblr}`,
          photo: this.props.state.tumblr_image
        })
        break
      case 'Twitter':
        this.setState({
          link: `http://www.twitter.com/${this.props.state.twitter}`,
          photo: this.props.state.twitter_image
        })
        break
      case 'Yelp':
        this.setState({
          link: `http://www.yelp.com/${this.props.state.yelp}`,
          photo: this.props.state.yelp_image
        })
        break
      default:
        this.setState({
          link: this.props.link,
          photo: this.props.image
        })
        break
    }
  }

  leaveSite = () => {
    window.open(this.state.link, '_blank')
  }

  render(){
    const { classes } = this.props
    return (
      <div style={{display: "inline-block", margin: "10px"}}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>{this.props.card}</Typography>
            <Avatar alt={`${this.props.card} Pic`} src={this.state.photo} className={classNames(classes.avatar, classes.bigAvatar)} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.leaveSite} style={{margin: "0 auto"}}>See This Profile</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)