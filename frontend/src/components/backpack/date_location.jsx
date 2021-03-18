import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'
import ParkContainer from '../parks/park_container';

export default class DateLocation extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {
            parkId: this.props.currentPark, 
            trailName: '',
            startDate: '',
            endDate: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTrailMap = this.renderTrailMap.bind(this);
    }

    handleChange(field) {
        return e => {this.setState({ [field]: e.target.value })}
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const { startDate, endDate, trailName, parkId } = this.state;
        this.props.clickAddItem('team form', 1, startDate, endDate, trailName, parkId)
      }

      renderTrailMap() {
        if (this.state.parkId) {
            return <ParkContainer parkId={this.state.parkId} />
        } 
      }

      render() {
        return (
          <div className="date-location">
            <div className="date-location-box">
              <h1>Find A Trail To Hike!</h1>
              <div className="date-location-dropdown">
                <label>Pick A Park in Your Area</label>
                <ParksDropdownContainer />
              </div>
              <form className="date-location-form" onSubmit={this.handleSubmit}>
                <label className='form-label'>Enter your Trail here: </label>
                <input 
                  className='location-form-input'
                  type="text"
                  onChange={this.handleChange('trailName')}
                /><br/>
                <label className='form-label'>When will you be traveling?: </label>
                <div className='startdate-form-input'>
                  <label>Start:</label>
                  <input 
                    type='date'
                    onChange={this.handleChange('startDate')}
                  />
                </div>
                <div className='enddate-form-input'>
                  <label>End:</label>
                  <input 
                    type='date'
                    onChange={this.handleChange('endDate')}
                  />
                </div>
                <button type='submit'>Add to your Backpack</button>
                {this.renderTrailMap()}
              </form>
            </div>
          </div>
        )
      }
}