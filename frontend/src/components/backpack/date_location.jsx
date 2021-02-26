import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'

export default class DateLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            park_id: '', 
            trail_name: '',
            date: ''
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
            <h1>Find A Trail To Hike!</h1>
            <form className="time-location-form" onSubmit={this.handleSubmit}>
                <label>Pick A Park in Your Area</label>
                <ParksDropdownContainer />
              <label>Enter your Trail here!:</label>
              <input 
                type="text"
                onChange={this.handleChange('trail_name')}
              />
              <button type='submit'>Add to your Backpack</button>
            </form>
          </div>
        )
      }
}