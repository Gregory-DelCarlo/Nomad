import React from 'react';

class Start extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      error: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) this.props.clickAddItem('time and location form', 0, this.state.title)
  }

  handleValidation() {
    let length = this.state.title.length;
    if (length === 0) {
      this.setState( {error: 'Title field is required'} );
      return false
    }
    else if (length < 3 || length > 50) {
      this.setState( {error: 'Title must be between 3 and 50 characters'} )
      return false
    }
    else return true
  }

  render() {
    return (
      <div className="start">
        <div className="start-box">
          <h1>Start planning your trip!</h1>
          <form className="start-form" onSubmit={this.handleSubmit}>
            <label>Give your trip a title:</label>
            <input 
              type="text"
              onChange={this.handleChange('title')}
            />
            {this.state.error !== null? <div>{this.state.error}</div> : null}
            <button type='submit'>Plan Trip</button>
          </form>
        </div>
      </div>
    )
  }
}


export default Start;