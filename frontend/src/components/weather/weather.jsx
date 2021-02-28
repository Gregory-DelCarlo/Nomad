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
      uv = this.props.weather.data.current.uv;
      vis_miles = this.props.weather.data.current.vis_miles;
      gust_mph = this.props.weather.data.current.gust_mph;
    } 

    return (
      <div className="weather-container">
        <div className="weather-header-container">
          <div className="weather-header-wrapper">
            <h3 className='weather-currentpark'>{this.props.currentPark}</h3>
            <h4 className='temperature'>{temperature} °F</h4>
            <h4>{condition}</h4>
            <img className='weather-condition-icon' src={icon_url}/>
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