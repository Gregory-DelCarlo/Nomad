import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'
import ParkContainer from '../parks/park_container';

export default class DateLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        parkId: this.props.currentPark, 
        trailName: '',
        startDate: '',
        endDate: '',
        errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTrailMap = this.renderTrailMap.bind(this);
    // this.getParkId = this.getParkId.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
    this.clearErrors = this.clearErrors.bind(this)
  }

  handleChange(field) {
    return e => {this.setState({ [field]: e.target.value })}
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
    let date = this.state.date.length;
    let validForm = true;
    let errors = {}

    if (date === 0){
      errors["Trail"] = "Date cannot be empty"
      validForm = false;
    } 
    if (trailName === 0) {
      errors["Date"] = "Trail name cannot be empty"
      validForm = false;
    }

    this.setState( {errors: errors} )
    return validForm
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
          <h1>Find A Trail To Hike</h1>
          <div className="date-location-dropdown">
            <label>Pick A Park in Your Area</label>
            <ParksDropdownContainer />
          </div>

          <form className="date-location-form" onSubmit={this.handleSubmit}>
            <label className='form-label'>Enter your Trail here: </label>
            <input 
              // className='location-form-input'
              className= {errors["Trail"] ? "backpack-input error" : "backpack-input"}
              type="text"
              onChange={this.handleChange('trailName')}
            />
            { errors["Trail"] ? <div className='backpack-input-error'>{errors["Trail"]}</div> : null}
            
            <label className='form-label'>When will you be traveling?: </label>

            <div className='startdate-form-input'>
              <label>Start:</label>
              <input 
                type='date'
                onChange={this.handleChange('startDate')}
                className= {errors["Date"]  ? "backpack-input error" : "backpack-input"}
              />
              { errors["Date"] ? <div className='backpack-input-error'>{errors["Date"]}</div> : null}
            </div>
                <div className='enddate-form-input'>
                  <label>End:</label>
                  <input 
                    type='date'
                    onChange={this.handleChange('endDate')}
                    className= {errors["Date"]  ? "backpack-input error" : "backpack-input"}
                  />
                  { errors["Date"] ? <div className='backpack-input-error'>{errors["Date"]}</div> : null}
                </div>
            <button type='submit'>Add to your Backpack</button>
            {this.renderTrailMap()}
          </form>

        </div>
      </div>
    )
  }
}