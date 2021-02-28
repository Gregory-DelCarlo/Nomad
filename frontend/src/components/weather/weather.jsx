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
    // if (this.props.weather !== JSON.parse(window.localStorage.getItem("currentPark"))) {
      // this.props.fetchWeather(JSON.parse(window.localStorage.getItem("weather")));
    // const weather = JSON.parse(window.localStorage.getItem("weather"))
    // if (weather) {
      this.props.receivePark(JSON.parse(window.localStorage.getItem("currentPark")));
      setTimeout(() => {
        this.props.fetchWeather(this.props.currentPark)
    }, 100);
      // this.state.currentPark = this.props
      // this.props.fetchWeather(this.props.currentParkId)
    // }
      // this.state.currentPark = window.localStorage.getItem("currentPark", JSON.stringify(this.props.currentParkId))
    // }
    //  else {
      
    // }
    // console.log(this.state.weather)
    // debugger
  }

  componentDidUpdate() {
    // if (this.props.weather !== JSON.parse(window.localStorage.getItem("currentPark"))) {
    //   this.props.receivePark(JSON.parse(window.localStorage.getItem("currentPark")));
    //   this.props.fetchWeather(this.props.currentParkId)
    //   this.state.currentPark = window.localStorage.setItem("currentPark", JSON.stringify(this.props.currentParkId))
    // }
    window.localStorage.setItem("weather", JSON.stringify(this.props.weather))
    window.localStorage.setItem("currentPark", JSON.stringify(this.props.currentParkId))
  }

  componentWillUnmount() {
    // window.localStorage.setItem("weather", JSON.stringify(this.props.weather))
    // window.localStorage.setItem("currentPark", JSON.stringify(this.props.currentParkId))
    // debugger
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.currentPark)
  }

  render() {
    let temperature, condition, feels_like, humidity,
       wind_dir, wind_mph, icon_url, pressure_in, precip_in

    // this.state.weather = this.props.weather !== {} ? this.props.weather : this.state.weather
    
    console.log(JSON.parse(window.localStorage.getItem("currentPark")))
    // console.log(this.props.weather)
    // this.props.fetchWeather(JSON.parse(window.localStorage.getItem("currentPark")))

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