import React from 'react';

class TripList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: []
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
      <ul className="trip-list">
        {this.state.trips.map((trip, ind) => (
          <li key={ind}> {trip.title} </li>
        ))}
      </ul> 
    )
  }

  render() {
    return (
      <div className="trips-page">
        <div className="backpack">
          {this.getTrips()}
        </div>
      </div>
    )
  }

}

export default TripList;