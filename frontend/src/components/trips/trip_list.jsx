import React from 'react';
import Trip from './trip';

class TripList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: [],
      page: "start"
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

  changePage(index) {
    this.setState({page: index})
  }

  getTrips() {
    return (
      <div className="trip-list">
        <ul>
          {this.state.trips.map((trip, index) => (
            <li 
              key={index}
              onClick={() => this.changePage(index)}
            > 
              {trip.title} 
            </li>
          ))}
        </ul> 
      </div>
    )
  }

  showTrip(index) {
    if (index === 'start') {
      return null;
    } else {
      return (
        <div className="trip-show-page">
          <Trip trip={this.state.trips[index]}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="trips-page">
        <div className="backpack">
          {this.getTrips()}
        </div>
        <div className="trip-show-section">
          {this.showTrip(this.state.page)}
        </div>
      </div>
    )
  }

}

export default TripList;