import React from 'react';
import ParksDropdownContainer from '../dropdowns/parks_dropdown_container'
import Park from '../parks/park';

export default class DateLocation extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            parkId: this.props.currentPark, 
            trailName: '',
            date: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTrailMap = this.renderTrailMap.bind(this);
        // this.getParkId = this.getParkId.bind(this);
    }

    handleChange(field) {
        return e => {this.setState({ [field]: e.target.value })}
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const { date, trailName, parkId } = this.state;
        this.props.clickAddItem('team form', 1, date, trailName, parkId)
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
          <div>
            <h1>Find A Trail To Hike!</h1>
            <form className="time-location-form" onSubmit={this.handleSubmit}>
                <label>Pick A Park in Your Area</label>
                <ParksDropdownContainer />
              <label className='form-label'>Enter your Trail here: </label>
              <input 
                className='formInput'
                type="text"
                onChange={this.handleChange('trailName')}
              /><br/>
              <label className='form-label'>When will you be traveling?: </label>
              <input 
                className='form-input'
                type='date'
                onChange={this.handleChange('date')}
              /><br/>
              <button type='submit'>Add to your Backpack</button>
              {this.renderTrailMap()}
            </form>
          </div>
        )
      }
}