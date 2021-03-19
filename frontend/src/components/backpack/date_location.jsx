import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'
import ParkContainer from '../parks/park_container';

export default class DateLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        parkId: this.props.currentPark, 
        trailName: this.props.state.trailName,
        startDate: this.props.state.startDate,
        endDate: this.props.state.endDate,
        errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTrailMap = this.renderTrailMap.bind(this);
    // this.getParkId = this.getParkId.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
    this.clearErrors = this.clearErrors.bind(this)

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
    this.clearErrors();
    if (this.handleValidations()) {
      const { startDate, endDate, trailName, parkId } = this.state;
      this.props.clickAddItem('team form', 1, startDate, endDate, trailName, parkId)
    }
  }
  
  clearErrors() {
    this.setState( {error: {}} )
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
    
    this.setState( {errors: errors} )
    return validForm
  }

  dateValidation(field, value) {
    let errors = Object.assign(this.state.errors);
    let startDate;
    let endDate;
    
    if (field === "endDate") {
      startDate = new Date(this.state.startDate);
      endDate = new Date(value);
      if (startDate > endDate){
        errors["End"] = "End date cannot be earlier"
      } else {
        delete errors["End"]
      }
    }
    else if (field === "startDate") {
      startDate = new Date(value);
      endDate = new Date(this.state.endDate);
      if (startDate > endDate){
        errors["End"] = "End date cannot be earlier"
      } else {
        delete errors["End"]
      }
    }

    this.setState( {errors: errors} )
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
    if (this.state.parkId) {
      return <ParkContainer rid={this.props.parks[this.state.parkId].rid} />
    } 
  }
  //   componentWillMount() {
    //       if(this.state.parkId == '') {
      //         this.setState({parkId: this.props.currentPark});
      //       }
      //   }
      //   getParkId(parkId) {
        //     //   debugger
        //     this.setState({parkId});
        //   }
        //   getParkId={this.getParkId}
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
                // className='location-form-input'
                className= {errors["Trail"] ? "backpack-input error" : "backpack-input"}
                type="text"
                onChange={this.handleChange('trailName')}
                // onBlur={this.handleValidations}
                value={this.state.trailName}
              />
              { errors["Trail"] ? <div className='backpack-input-error'>{errors["Trail"]}</div> : null}

            </div>
            
            <label className='form-label'>When will you be traveling?: </label>

            <div className='startdate-form-input'>
              <label>Start:</label>
              <input 
                type='date'
                onChange={this.handleChange('startDate')}
                // onBlur={this.handleValidations}
                // onClick={this.dateValidation}
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
                    // onBlur={this.handleValidations}
                    // onClick={this.dateValidation}
                    className= {errors["End"]  ? "backpack-input error" : "backpack-input"}
                    value={this.state.endDate}
                  />
                  { errors["End"] ? <div className='backpack-input-error'>{errors["End"]}</div> : null}
                </div>
            <button type='submit'>Add to your Backpack</button>
            {this.renderTrailMap()}
          </form>

        </div>
      </div>
    )
  }
}