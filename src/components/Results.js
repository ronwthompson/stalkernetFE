import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

const divStyle = {
    color: "#777777"
}

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
}

class Results extends Component {
    constructor(props){
        super(props)

        this.state = {
            results: {
                others: []
            }
        }
    }

    componentWillMount = async () => {
        const data = await this.getInfo()
    }

    getInfo = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/faces/instagram/all/${this.props.state.results}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        })
        const json = await response.json()
        this.setState({results: json})
        return json
    }

    render(){
        const { classes } = this.props
        return (
            <div style={divStyle}>
                <div>
                    <h1>First Name:{this.state.results.first_name}</h1>
                    { this.state.results.last_name ? <h1>Last Name:{this.state.results.last_name}</h1> : '' }
                    <h4>Location:{this.state.results.location}</h4>
                </div>
                <ul>
                    { this.state.results.facebook ? <a href={`http://www.facebook.com/${this.state.results.facebook}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Facebook Pic`} src={this.state.results.facebook_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Facebook Profile</li></a> : '' }
                    { this.state.results.flickr ? <a href={`http://www.flickr.com/${this.state.results.flickr}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Flickr Pic`} src={this.state.results.flickr_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Flickr Profile</li></a> : '' }
                    { this.state.results.foursquare ? <a href={`http://www.foursquare.com/${this.state.results.foursquare}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Foursquare Pic`} src={this.state.results.foursquare_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Foursquare Profile</li></a> : '' }
                    { this.state.results.goodreads ? <a href={`http://www.goodreads.com/${this.state.results.goodreads}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s GoodReads Pic`} src={this.state.results.goodreads_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>GoodReads Profile</li></a> : '' }
                    { this.state.results.googleplus ? <a href={`http://plus.gooogle.com/${this.state.results.googleplus}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s GooglePlus Pic`} src={this.state.results.googleplus_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>GooglePlus Profile</li></a> : '' }
                    { this.state.results.instagram ? <a href={`http://instagram.com/${this.state.results.instagram}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Instagram Pic`} src={this.state.results.instagram_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Instagram Profile</li></a> : '' }
                    { this.state.results.linkedin ? <a href={`http://www.linkedin.com/${this.state.results.linkedin}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s LinkedIn Pic`} src={this.state.results.linkedin_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>LinkedIn Profile</li></a> : '' }
                    { this.state.results.livejournal ? <a href={`http://www.livejournal.com/${this.state.results.livejournal}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s LiveJournal Pic`} src={this.state.results.livejournal_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>LiveJournal Profile</li></a> : '' }
                    { this.state.results.meetup ? <a href={`http://www.meetup.com/${this.state.results.meetup}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Meetup Pic`} src={this.state.results.meetup_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Meetup Profile</li></a> : '' }
                    { this.state.results.myspace ? <a href={`http://www.myspace.com/${this.state.results.myspace}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s MySpace Pic`} src={this.state.results.myspace_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>MySpace Profile</li></a> : '' }
                    { this.state.results.pinterest ? <a href={`http://www.pinterest.com/${this.state.results.pinterest}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Pinterest Pic`} src={this.state.results.pinterest_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Pinterest Profile</li></a> : '' }
                    { this.state.results.tumbler ? <a href={`http://www.tumblr.com/${this.state.results.tumblr}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Tumblr Pic`} src={this.state.results.tumblr_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Tumblr Profile</li></a> : '' }
                    { this.state.results.twitter ? <a href={`http://twitter.com/${this.state.results.twitter}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Twitter Pic`} src={this.state.results.twitter_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Twitter Profile</li></a> : '' }
                    { this.state.results.yelp ? <a href={`http://www.yelp.com/${this.state.results.yelp}`} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Yelp Pic`} src={this.state.results.yelp_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>Yelp Profile</li></a> : '' }
                    { this.state.results.others.map(object => <a href={object.other_link} target='_blank'><Avatar alt={`${this.state.results.first_name}'s Other Pic`} src={object.other_image} className={classNames(classes.avatar, classes.bigAvatar)} /><li>{ object.other_link }</li></a>) }
                </ul>
            </div>
            )
    }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Results)