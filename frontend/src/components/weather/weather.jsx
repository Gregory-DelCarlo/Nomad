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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' 
            onChange={this.handleChange('city')}
            placeholder="enter a city"/>
          <br />
          <button type='submit'>search weather</button>
        </form>
      </div>
    )
  }
}

export default Weather