import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState( { city: this.props.currentPark } )
    
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  handleSubmit(e) {
    console.log(this.props.currentPark)
    e.preventDefault();
    this.props.fetchWeather(this.state)
  }

  render() {
    let temperature
    if (Object.values(this.props.weather).length > 0) temperature = this.props.weather.data.current.temp_f;
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
          {
            Object.values(this.props.weather).length > 0? <div>The weather near {this.props.currentPark} is {temperature} F</div> : null
          }
          
      </div>
    )
  }
}

export default Weather