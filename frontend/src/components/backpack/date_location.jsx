import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'
import Park from '../parks/park';

export default class DateLocation extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
        parkId: this.props.currentPark, 
        trailName: '',
        date: '',
        errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTrailMap = this.renderTrailMap.bind(this);
    // this.getParkId = this.getParkId.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
  }

  handleChange(field) {
    return e => {this.setState({ [field]: e.target.value })}
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.handleValidations()
    if (this.state.errors === {}) {
      const { date, trailName, parkId } = this.state;
      this.props.clickAddItem('team form', 1, date, trailName, parkId)
    }
  }

  handleValidations() {
    this.setState( {error: {}} )
    let trailName = this.state.trailName.length;
    let date = this.state.date.length;
    
    // Must be nested as setState is async
    if (date === 0) {
      this.setState( {errors: Object.assign({}, this.state.errors, {Date: "Date cannot be empty"})}, () => {
        if (trailName === 0) {
          this.setState( {errors: Object.assign({}, this.state.errors, {Trail: "Trail name cannot be empty"})} )
        }
      })
    }
  }

  renderTrailMap() {
    // debugger
    
    if (this.state.parkId) {
        return <Park rid={this.props.parks[this.state.parkId].rid} />
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
            />
            {console.log(this.state.errors)}
            { this.state.errors["Trail"] ? <div>{this.state.errors["Trail"]}</div> : null}
            <br/>
            
            <label className='form-label'>When will you be traveling?: </label>
            <input 
              className='date-form-input'
              type='date'
              onChange={this.handleChange('date')}
            />
            { this.state.errors["Date"] ? <div>{this.state.errors["Date"]}</div> : null}
            <br/>
            <button type='submit'>Add to your Backpack</button>
            {this.renderTrailMap()}
          </form>

        </div>
      </div>
    )
  }
}