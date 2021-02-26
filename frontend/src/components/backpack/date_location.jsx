import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'

export default class DateLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkId: '', 
            trailName: '',
            date: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => {console.log(e.target.value); this.setState({ [field]: e.target.value })}
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const { date, trailName, parkId } = this.state;
        this.props.clickAddItem('team form', 1, date, trailName, parkId)
      }
    
      render() {
        return (
          <div>
            <h1>Find A Trail To Hike!</h1>
            <form className="time-location-form" onSubmit={this.handleSubmit}>
                <label>Pick A Park in Your Area</label>
                <ParksDropdownContainer />
              <label>Enter your Trail here:</label>
              <input 
                type="text"
                onChange={this.handleChange('trailName')}
              /><br/>
              <label>When will you be traveling?:</label>
              <input 
                type='date'
                onChange={this.handleChange('date')}
              /><br/>
              <button type='submit'>Add to your Backpack</button>
            </form>
          </div>
        )
      }
}