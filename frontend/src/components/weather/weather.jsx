import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPark: '',
      weather: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.receivePark(JSON.parse(window.localStorage.getItem("currentParkId")));
    setTimeout(() => {
      this.props.fetchWeather(JSON.parse(window.localStorage.getItem("currentPark")))
    }, 10)
  }

  componentWillUnmount() {
    localStorage.clear();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.currentPark)
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
        <br />
        <div className="weather-header-container">
          <div className="weather-header-wrapper">
            <h3 className='weather-currentpark'>{this.props.currentPark}</h3>
            <h4 className='temperature'>{temperature} °F</h4>
            <div>{condition}</div>
            <img className='weather-condition-icon' src={icon_url}/>
          </div>
        </div>
          <ul className='weather-condition-ul'>
            <tr>Feels like {feels_like}</tr>
            <tr>Humidity {humidity}%</tr>
            <tr>Wind {wind_dir} {wind_mph} mph</tr>
            <tr>Pressure {pressure_in} inHg</tr>
            <tr>Precipitation {precip_in} in</tr>
          </ul>
      </div>
    )
  }
}

export default Weather