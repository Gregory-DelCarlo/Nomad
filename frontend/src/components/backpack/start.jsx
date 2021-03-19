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
    return e => {
      this.setState({ [field]: e.target.value })
      this.handleLiveValidation(e.target.value.length)
    }
  }
  
  handleLiveValidation(e) {
    let length = e
    if (length > 3 && length < 50) {
      // this.setState( {error: 'Title must be between 3 and 50 characters'} )
      this.setState( {error: null} )
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) this.props.clickAddItem('time and location form', 0, this.state.title)
  }

  handleValidation() {
    this.setState( {error: null} )
    let length = this.state.title.length;
    if (length < 3 || length > 50) {
      this.setState( {error: 'Title must be between 3 and 50 characters'} )
      return false
    }
    else return true
  }

  render() {
    return (
      <div className="start">
        <div className="start-box">
          <h1>Start planning your trip</h1>
          <form className="start-form" onSubmit={this.handleSubmit}>
            <label>Give your trip a name:</label>
            <input 
              type="text"
              onChange={this.handleChange('title')}
              // onBlur={this.handleValidation}
              className= {this.state.error !== null? "backpack-input error" : "backpack-input"}
            />
            {this.state.error !== null? <div className='backpack-input-error'>{this.state.error}</div> : null}
            <button type='submit'>Plan Trip</button>
          </form>
        </div>
      </div>
    )
  }
}


export default Start;