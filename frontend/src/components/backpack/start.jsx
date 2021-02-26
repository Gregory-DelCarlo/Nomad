import React from 'react';

class Start extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clickAddItem('time and location form', 0, this.state.title)
  }

  render() {
    return (
      <div>
        <h1>Start planning your trip!</h1>
        <form className="start-form" onSubmit={this.handleSubmit}>
          <label>Give your trip a title:</label>
          <input 
            type="text"
            onChange={this.handleChange('title')}
          />
          <button type='submit'>Plan Trip</button>
        </form>
      </div>
    )
  }
}


export default Start;