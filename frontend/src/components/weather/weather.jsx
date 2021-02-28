import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      park: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState( { park: this.props.currentPark } )
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  handleSubmit(e) {
    console.log(this.props.currentPark)
    e.preventDefault();
    this.props.fetchWeather(this.state.park)
  }

  render() {
    let temperature, condition, feels_like, humidity,
       wind_dir, wind_mph, icon_url, pressure_in, precip_in

    if (Object.values(this.props.weather).length > 0) {
      temperature = this.props.weather.data.current.temp_f;
      condition = this.props.weather.data.current.condition.text;
      icon_url = this.props.weather.data.current.condition.icon;
      feels_like = this.props.weather.data.current.feelslike_f;
      humidity = this.props.weather.data.current.humidity;
      wind_dir = this.props.weather.data.current.wind_dir;
      wind_mph = this.props.weather.data.current.wind_mph;
      pressure_in = this.props.weather.data.current.pressure_in;
      precip_in = this.props.weather.data.current.precip_in;
    } 
    return (
      <div className="weather-container">
        {/* <form onSubmit={this.handleSubmit}>
          <input type='text' 
            onChange={this.handleChange('city')}
            // value={this.props.state.ui.currentPark ? this.props.state.entities.parks[this.props.state.ui.currentPark].name : ''}
            placeholder="enter a city"/>
          <br />
          <button type='submit'>search weather</button>
        </form> */}
        {/* {() => this.props.fetchWeather({ city: this.props.currentPark })} */}
        <br />
          {this.props.currentPark}
          <div> is {temperature} F</div>
          <img src={icon_url}/>
          <ul>
            <li>Weather condition is {condition}</li>
            <li>Feels like {feels_like}</li>
            <li>Humidity {humidity}</li>
            <li>Wind {wind_dir} {wind_mph}</li>
            <li>Pressure {pressure_in}</li>
            <li>Precipitation {precip_in}</li>
          </ul>
          
          
      </div>
    )
  }
}

export default Weather