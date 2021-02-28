import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      park: '',
      weather: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // this.setState( { park: this.props.currentPark } )
    // const state = JSON.parse(window.localStorage.getItem("weather"));
    // state ? this.props.weather = state : null
  }

  componentDidMount() {
    
    this.state.weather = JSON.parse(window.localStorage.getItem("weather"));
    console.log(this.state.weather)
    // debugger
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  componentDidUpdate() {
    window.localStorage.setItem("weather", JSON.stringify(this.props.weather))
  }

  componentWillUnmount() {
    // window.localStorage.setItem("weather", JSON.stringify(this.props.weather))
    debugger
  }

  handleSubmit(e) {
    console.log(this.props.currentPark)
    e.preventDefault();
    this.props.fetchWeather(this.state.park)
  }

  render() {
    let temperature, condition, feels_like, humidity,
       wind_dir, wind_mph, icon_url, pressure_in, precip_in
    this.state.weather = JSON.parse(window.localStorage.getItem("weather"));
    console.log(this.state.weather)
    console.log("wefwe")
    if (Object.values(this.state.weather).length > 0) {
      temperature = this.state.weather.data.current.temp_f;
      condition = this.state.weather.data.current.condition.text;
      icon_url = this.state.weather.data.current.condition.icon;
      feels_like = this.state.weather.data.current.feelslike_f;
      humidity = this.state.weather.data.current.humidity;
      wind_dir = this.state.weather.data.current.wind_dir;
      wind_mph = this.state.weather.data.current.wind_mph;
      pressure_in = this.state.weather.data.current.pressure_in;
      precip_in = this.state.weather.data.current.precip_in;
    } 
    return (
      <div className="weather-container">
        <br />
          {this.props.currentPark}
          <div className='temp'> is {temperature} F</div>
          <img className='weather-condition-icon' src={icon_url}/>
          <ul className='weather-condition-ul'>
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