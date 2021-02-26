import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state)
  }

  render() {
    let temperature
    if (Object.values(this.props.weather).length > 0) temperature = this.props.weather.data.current.temp_f
    // let $i = $('i') 
    // let temperature = this.props.state.entities.weather.data.current.temp_f
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' 
            onChange={this.handleChange('city')}
            placeholder="enter a city"/>
          <br />
          <button type='submit'>search weather</button>
        </form>
        <br />
          {
           Object.values(this.props.weather).length > 0? <div>The weather near {this.state.city} is {temperature} F</div> : null
          }
          
          {/* {Object.keys(this.props.state.entities.weather)} */}
      </div>
    )
  }
}

export default Weather