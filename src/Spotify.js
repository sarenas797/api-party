import React, { Component } from 'react'
import './Spotify.css'

class Spotify extends Component{
    render(){
        return(
            <div className="Spotify">
                <img className = "spotify-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Spotify.svg/2000px-Spotify.svg.png"/>
                <form>
                    <input type="text" placeholder="Enter a name to search on Spotify"/>
                    <button type="submit">Enter</button>
                </form>
                    
            </div>
        )
    }
}

export default Spotify 