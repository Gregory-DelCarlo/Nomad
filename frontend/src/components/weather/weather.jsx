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
    let temperature, condition, feels_like, humidity, gust_mph,
       wind_dir, wind_mph, icon_url, pressure_in, precip_in, uv, vis_miles

    let forecast_icon

    if (Object.values(this.props.weather).length > 0) {
      let currentWeather = this.props.weather.data.current;

      temperature = currentWeather.temp_f;
      condition = currentWeather.condition.text;
      icon_url = currentWeather.condition.icon;
      feels_like = currentWeather.feelslike_f;
      humidity = currentWeather.humidity;
      wind_dir = currentWeather.wind_dir;
      wind_mph = currentWeather.wind_mph;
      pressure_in = currentWeather.pressure_in;
      precip_in = currentWeather.precip_in;
      uv = currentWeather.uv;
      vis_miles = currentWeather.vis_miles;
      gust_mph = currentWeather.gust_mph;

      forecast_icon = this.props.weather.data.forecast.forecastday[1].day.condition.icon
    } 

    return (
      <div className="weather-container">
        <div className="weather-header-container">
          <div className="weather-header-wrapper">
            <h3 className='weather-currentpark'>{this.props.currentPark}</h3>
            <h4 className='temperature'>{temperature} °F</h4>
            <h4>{condition}</h4>
            <img className='weather-condition-icon' src={icon_url} alt="weather-icon"/>
            Tomorrow's Forecast
            <img className='weather-condition-icon2' src={forecast_icon} alt="weather-icon"/>
            
          </div>
        </div>
        <div className="weather-condition-container">
          <ul className='weather-condition-ul'>
            <li> 
              <div className="weather-condition-item-description">Feels like</div> 
              <div className="weather-condition-item-values">{feels_like} °F</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">Humidity</div> 
              <div className="weather-condition-item-values">{humidity}%</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">Wind</div> 
              <div className="weather-condition-item-values">{wind_dir} {wind_mph} mph</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">Gust</div> 
              <div className="weather-condition-item-values">{gust_mph} mph</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">Pressure</div> 
              <div className="weather-condition-item-values">{pressure_in} inHg</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">Precipitation</div> 
              <div className="weather-condition-item-values">{precip_in} in</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">UV Index</div> 
              <div className="weather-condition-item-values">{uv}</div> 
            </li>
            <li> 
              <div className="weather-condition-item-description">Visible Miles</div> 
              <div className="weather-condition-item-values">{vis_miles} {vis_miles === 1 ? "mile" : "miles"}</div> 
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Weather