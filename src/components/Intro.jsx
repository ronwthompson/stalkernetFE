import React, { Component } from 'react'
const incog = require('../video/incognito.png')

class Intro extends Component {
    render(){
        return (
            <div className='sliderContainer'>
                <div className='slider'></div>
                <img className='incogMan' src={incog} alt='incognito man' />
            </div>
            )
    }
}

export default Intro