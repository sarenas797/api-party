import React, {Component} from 'react'

class WeatherLoc extends Component{
     state={
        location:{
            id:'',
        }
    }

    constructor(props){
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData=(props)=>{
        fetch(`api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.location}&appid=d1914dc8516531ee2eb4ffd229333af5`)
        //.then(response=>response.json())
        .then(user => this.setState({user}))
        console.log(this.state)
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
            <div>
                <h2>{this.state.all}</h2>
            </div>
        )
    }
}

export default WeatherLoc