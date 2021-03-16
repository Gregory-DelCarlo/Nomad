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
    debugger
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.trips !== prevState.trips) {
      return { trips: nextProps.trips };
    }
    else return null;
  }

  render() {
    debugger
    return null;
  }

}

export default TripList;