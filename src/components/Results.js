import React, { Component } from 'react'
import ResultsCard from './ResultsCard'

const divStyle = {
    color: "#DDDDDD"
}

const inlineStyle = {
    display: "inline-block",
    verticalAlign: "middle"
}

const inlineStyle2 = {
    display: "inline-block",
    verticalAlign: "middle",
    marginLeft: "50px"
}

const picStyle = {
    borderRadius: "50%",
    height: "250px"
}

const linkStyle = {
    textDecoration: "none",
    color: "#DDDDDD",
    verticalAlign: "middle"
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
                <div style={{ textAlign: "center", marginBottom: "50px"}}>
                    <div style={inlineStyle}>
                        <img src={this.state.results.instagram_image} alt={`${this.state.results.first_name}'s main photo`} style={picStyle} />
                    </div>
                    <div style={inlineStyle2}>
                        <h1>First Name: {this.state.results.first_name}</h1>
                        { this.state.results.last_name ? <h1>Last Name: {this.state.results.last_name}</h1> : '' }
                        <h4>Location: {this.state.results.location}</h4>
                    </div>
                </div>
                { this.state.results.facebook ? <ResultsCard card="Facebook" state={this.state.results}/> : '' }
                { this.state.results.flickr ? <ResultsCard card="Flickr" state={this.state.results}/> : '' }
                { this.state.results.foursquare ? <ResultsCard card="Foursquare" state={this.state.results}/> : '' }
                { this.state.results.goodreads ? <ResultsCard card="Goodreads" state={this.state.results}/> : '' }
                { this.state.results.googleplus ? <ResultsCard card="GooglePlus" state={this.state.results}/> : '' }
                { this.state.results.instagram ? <ResultsCard card="Instagram" state={this.state.results}/> : '' }
                { this.state.results.linkedin ? <ResultsCard card="LinkedIn" state={this.state.results}/> : '' }
                { this.state.results.livejournal ? <ResultsCard card="Livejournal" state={this.state.results}/> : '' }
                { this.state.results.meetup ? <ResultsCard card="Meetup" state={this.state.results}/> : '' }
                { this.state.results.myspace ? <ResultsCard card="Myspace" state={this.state.results}/> : '' }
                { this.state.results.pinterest ? <ResultsCard card="Pinterest" state={this.state.results}/> : '' }
                { this.state.results.tumbler ? <ResultsCard card="Tumbler" state={this.state.results}/> : '' }
                { this.state.results.twitter ? <ResultsCard card="Twitter" state={this.state.results}/> : '' }
                { this.state.results.yelp ? <ResultsCard card="Yelp" state={this.state.results}/> : '' }
                { this.state.results.others.map(object => <ResultsCard card="Other" link={object.other_link} image={object.other_image} />) }
            </div>
            )
    }
}

export default Results