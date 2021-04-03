import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container';

export default class DateLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        parkId: this.props.currentPark, 
        trailName: this.props.state.trailName,
        startDate: this.props.state.startDate,
        endDate: this.props.state.endDate,
        errors: {},
        dateErrorFlag: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTrailMap = this.renderTrailMap.bind(this);
    this.handleValidations = this.handleValidations.bind(this);

    this.dateValidation = this.dateValidation.bind(this)
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
      this.handleLiveVaidation(field, e.target.value.length)
      this.dateValidation(field, e.target.value)
    }
  }

  
  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidations() && !this.state.dateErrorFlag) {
      let errors = []
      errors["End"] = "End date cannot be earlier"
      this.setState( {errors: errors} )
    }
    else if (this.handleValidations() && this.state.dateErrorFlag) {
      const { startDate, endDate, trailName, parkId } = this.state;
      this.props.clickAddItem('team form', 1, startDate, endDate, trailName, parkId)
    }
  }
  
  handleValidations() {
    let trailName = this.state.trailName.length;
    let startDate = this.state.startDate.length;
    let endDate = this.state.endDate.length;
    let validForm = true;
    let errors = {}

    
    if (startDate === 0){
      errors["Start"] = "Start date cannot be empty"
      validForm = false;
    } 
    if (endDate === 0){
      errors["End"] = "End date cannot be empty"
      validForm = false;
    } 
    if (trailName === 0) {
      errors["Trail"] = "Trail name cannot be empty"
      validForm = false;
    }
    if (startDate > endDate) {
      errors["End"] = "End date cannot be earlier"
    }
    
    this.setState( {errors: errors} )
    return validForm
  }

  dateValidation(field, value) {
    let errors = Object.assign(this.state.errors);
    let startDate;
    let endDate;
    let validForm = true;
    
    if (field === "endDate") {
      startDate = new Date(this.state.startDate);
      endDate = new Date(value);
      if (startDate > endDate){
        errors["End"] = "End date cannot be earlier"
        validForm = false;
      } else {
        delete errors["End"]
      }
    }
    else if (field === "startDate") {
      startDate = new Date(value);
      endDate = new Date(this.state.endDate);
      if (startDate > endDate){
        errors["End"] = "End date cannot be earlier"
        validForm = false;
      } else {
        delete errors["End"]
      }
    }

    this.setState( {errors: errors, dateErrorFlag: validForm} )
  }
  
  handleLiveVaidation(field, length) {
    let errors = Object.assign(this.state.errors)
    
    if (length === 0) {
      if (field === "startDate"){
        errors["Start"] = "Start date cannot be empty"
      } 
      if (field === "endDate"){
        errors["End"] = "End date cannot be empty"
      } 
      if (field === "trailName") {
        errors["Trail"] = "Trail name cannot be empty"
      }
    } else {
      if (field === "startDate"){
        delete errors["Start"]
      } 
      if (field === "endDate"){
        delete errors["End"]
      } 
      if (field === "trailName") {
        delete errors["Trail"]
      }
    }

    this.setState( {errors: errors} )
  }

  renderTrailMap() {
    if (this.props.parkRid) {
      return(
        <div className="widget-page">
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
    let errors = Object.values(this.state.errors);
    if (errors) errors.forEach( error => {
      errors[error.split(" ")[0]] = error
    })
    return (
      <div className="date-location">
        <div className="date-location-box">
          <h1>Find a Trail to Hike</h1>
          <div className="date-location-dropdown">
            <label>Pick a Park in Your Area</label>
            <ParksDropdownContainer />
          </div>

          <form className="date-location-form" onSubmit={this.handleSubmit}>
            
              <label className='form-label'>Enter your trail here: </label>
            <div className="trail-input-wrapper">
              <input
                className= {errors["Trail"] ? "backpack-input error" : "backpack-input"}
                type="text"
                onChange={this.handleChange('trailName')}
                value={this.state.trailName}
              />
              { errors["Trail"] ? <div className='backpack-input-error'>{errors["Trail"]}</div> : null}

            </div>
            <div className="start-and-end-form">
              <label className='form-label'>When will you be traveling? </label>

              <div className='startdate-form-input'>
                <label>Start:</label>
                <input 
                  type='date'
                  onChange={this.handleChange('startDate')}
                  className= {errors["Start"]  ? "backpack-input error" : "backpack-input"}
                  value={this.state.startDate}
                />
                { errors["Start"] ? <div className='backpack-input-error'>{errors["Start"]}</div> : null}
              </div>
                  <div className='enddate-form-input'>
                    <label>End:</label>
                    <input 
                      type='date'
                      onChange={this.handleChange('endDate')}
                      className= {errors["End"]  ? "backpack-input error" : "backpack-input"}
                      value={this.state.endDate}
                    />
                    { errors["End"] ? <div className='backpack-input-error'>{errors["End"]}</div> : null}
                  </div>
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