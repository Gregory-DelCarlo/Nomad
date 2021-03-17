import React from 'react';
import Trip from './trip';

class TripList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: [],
      page: 0
    }
  }

  componentDidMount() {
    this.props.getUserTrips(this.props.userId);
    this.setState({trips: this.props.trips});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.trips !== prevState.trips) {
      return { trips: nextProps.trips };
    }
    else return null;
  }

  getTrips() {
    return (
      <div className="trip-list">
        <ul>
          {this.state.trips.map((trip, index) => (
            <li key={index}> {trip.title} </li>
          ))}
        </ul> 
      </div>
    )
  }

  showTrip(index) {
    return (
      <div className="trip-show-page">
        <Trip trip={this.state.trips[index]}/>
      </div>
    )
  }

  render() {
    return (
      <div className="trips-page">
        <div className="backpack">
          {this.getTrips()}
        </div>
        <div className="trip-show">
          {this.showTrip(this.state.page)}
        </div>
      </div>
    )
  }

}

export default TripList;