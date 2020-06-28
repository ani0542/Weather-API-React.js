import React, { Component } from 'react'
import Titles from './Components/Titles'
import Forms from './Components/Forms'
import Weather from './Component/Weather'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
    state={
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
    }
    getWeather=async (e)=>{
        e.preventDefault()
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;

        const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=5d6bb26a4e4092f506f112f4e878567d`)
        const data=await api_call.json();

      if(city && country)
      {
        console.log(data)

        this.setState({
            temperature:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:'',
            
        })
      
      }
      else
      {
        this.setState({
            temperature:undefined,
            city:undefined,
            country:undefined,
            humidity:undefined,
            description:undefined,
            error:'please enter the value'
        })
      }
    }
    render()
    {
        return(<>
                 <div className='wrapper'>
                     <div className='main'>
                           <div className='container'>
                                <div className='row'>
                                     <div className='col-xs-5 title-container'>
                                           
                                      <Titles/>
                                     
                                      <div className="col-xs-7 form-container">
                                        <Forms getWeather={this.getWeather} />
                                        <Weather 
                                            temperature={this.state.temperature} 
                                            humidity={this.state.humidity}
                                            city={this.state.city}
                                            country={this.state.country}
                                            description={this.state.description}
                                            error={this.state.error}
                                        />
                </div>

                                     </div>
                                </div>
                           </div>
                     </div>
                 </div>
        </>)
    }
}

export default App;

