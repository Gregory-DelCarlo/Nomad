import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'
import Weather from '../weather/weather_container'

export default class DateLocation extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {
            parkId: this.props.currentParkId, 
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
      if (this.props.parkRid) {
        return(
          <div className="widget-page">
              {/* <Weather/> */}
              <div className="widget-container">
                  <div className="widget-info">
                      <iframe title='region info' width="130" height="100%" frameBorder="0" src={`https://www.trailforks.com/widgets/region_info/?rid=${this.props.parkRid}&counts=1&stats=1&title=1&w=100%&100%&activitytype=6`}></iframe>
                  </div>
                  <div className="widget-map">
                      <iframe title='region map' width="100%" height="100%" frameBorder="0" allowFullScreen src={`https://www.trailforks.com/widgets/region_map/?rid=${this.props.parkRid}&w=100%&h=300px&activitytype=6&maptype=trailforks&trailstyle=difficulty&controls=0&list=1&layers=labels,poi,polygon,directory,region&z=&lat=&lon=&hideunsanctioned=0`}></iframe>
                  </div>
              </div>
          </div>
        )
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
            </form>
            <div className='map-box'>
              {this.renderTrailMap()}
            </div>
          </div>
        </div>
      )
    }
}