import React, { Component } from 'react'

class Results extends Component {
    constructor(props){
        super(props)

        this.state = {
            results: {}
        }
    }

    componentWillMount = async () => {
        const data = await this.getInfo()
        console.log("will mount: ", data)
    }

    getInfo = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/faces/instagram/${this.props.state.results}`, {
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
        return (
            <div>
                <div>
                    <h1>First Name:{this.state.results.first_name}</h1>
                    <h1>Last Name:{this.state.results.last_name}</h1>
                    <h4>Location:{this.state.results.location}</h4>
                </div>
                <ul>
                    { this.state.results.facebook ? <a href={`http://www.facebook.com/${this.state.results.facebook}`} target='_blank'><li>Facebook Profile</li></a> : '' }
                    { this.state.results.flickr ? <a href={`http://www.facebook.com/${this.state.results.flickr}`} target='_blank'><li>Flickr Profile</li></a> : '' }
                    { this.state.results.foursquare ? <a href={`http://www.facebook.com/${this.state.results.foursquare}`} target='_blank'><li>Foursquare Profile</li></a> : '' }
                    { this.state.results.goodreads ? <a href={`http://www.facebook.com/${this.state.results.goodreads}`} target='_blank'><li>GoodReads Profile</li></a> : '' }
                    { this.state.results.googleplus ? <a href={`http://www.facebook.com/${this.state.results.googleplus}`} target='_blank'><li>GooglePlus Profile</li></a> : '' }
                    { this.state.results.instagram ? <a href={`http://instagram.com/${this.state.results.instagram}`} target='_blank'><li>Instagram Profile</li></a> : '' }
                    { this.state.results.linkedin ? <a href={`http://www.facebook.com/${this.state.results.linkedin}`} target='_blank'><li>LinkedIn Profile</li></a> : '' }
                    { this.state.results.livejournal ? <a href={`http://www.facebook.com/${this.state.results.livejournal}`} target='_blank'><li>LiveJournal Profile</li></a> : '' }
                    { this.state.results.meetup ? <a href={`http://www.facebook.com/${this.state.results.meetup}`} target='_blank'><li>Meetup Profile</li></a> : '' }
                    { this.state.results.myspace ? <a href={`http://www.facebook.com/${this.state.results.myspace}`} target='_blank'><li>MySpace Profile</li></a> : '' }
                    { this.state.results.pinterest ? <a href={`http://www.facebook.com/${this.state.results.pinterest}`} target='_blank'><li>Pinterest Profile</li></a> : '' }
                    { this.state.results.tumbler ? <a href={`http://www.facebook.com/${this.state.results.tumbler}`} target='_blank'><li>Tumbler Profile</li></a> : '' }
                    { this.state.results.twitter ? <a href={`http://twitter.com/${this.state.results.twitter}`} target='_blank'><li>Twitter Profile</li></a> : '' }
                    { this.state.results.yelp ? <a href={`http://www.facebook.com/${this.state.results.yelp}`} target='_blank'><li>Yelp Profile</li></a> : '' }
                </ul>
            </div>
            )
    }
}

export default Results