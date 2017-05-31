import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './Weather.css'
import WeatherLoc from './WeatherLoc'

class Weather extends Component{
    state={
        location:'',
    }

    handleChange=(ev)=>{
        const location = ev.currentTarget.value
        this.setState({location})
    }

    handleSubmit=(ev)=>{
        ev.preventDefault()
        this.props.history.push(`/Weather/${this.state.location}`)
    }

    render(){
        return(
            <div className="Weather">
                <img className = "Weather-logo" src="https://icons.wxug.com/i/c/v4/chancerain.svg"/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  value={this.state.location} onChange={this.handleChange} placeholder="Enter a city"/>
                    <button type="submit">Enter</button>
                </form>
                <Route path='/Weather/:location' component={WeatherLoc} />     
                <Route exact path='/Weather' render={()=> (<h3>Please enter a location </h3>)}/>
            </div>
        )
    }
}

export default Weather