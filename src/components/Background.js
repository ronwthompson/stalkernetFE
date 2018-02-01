import React, { Component } from 'react'
const videoMP4 = require('./../video/tilt-coding/MP4/Love-Coding.mp4')

class Background extends Component {

    render(){
        return (
            <div className="video-container">
                <video id="background-video" loop autoPlay>
                    <source src={videoMP4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            )
    }
}

export default Background