import React, {Component} from 'react'

class Weather_loc extends Component{
     state={
        user:{
            id:'',
        }
    }

    constructor(props){
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData=(props)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.username}&APPID=d1914dc8516531ee2eb4ffd229333af5`)
        .then(response=>response.json())
        .then(user => this.setState({user}))
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = (nextProps.location != this.props.location)
        if(locationChanged){
            this.fetchUserData(nextProps)
        }
    }

    render(){
        const {user}=this.state
        return(
            <div >
                <h1>yay</h1>
            </div>
        )
    }
}

export default Weather_loc