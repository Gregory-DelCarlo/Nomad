import { connect } from 'react-redux';
import TripList from './trip_list';
import {
  fetchTrip,
  fetchUserTrips,
  updateTrip,
  deleteTrip
} from '../../actions/trip_actions';

const mapStateToProps = state => {
  return({
    trips: Object.values(state.backpack.trips),
    tripsPulled: state.backpack.tripsPulled,
    userId: state.session.user.id
  })
}

const mapDispatchToProps = dispatch => ({
  getTrip: id => dispatch(fetchTrip(id)),
  getUserTrips: userId => dispatch(fetchUserTrips(userId)),
  updateTrip: trip => dispatch(updateTrip(trip)),
  deleteTrip: trip => dispatch(deleteTrip(trip))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripList);