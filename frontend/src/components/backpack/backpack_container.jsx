import { connect } from 'react-redux';
import Backpack from './backpack';
import { fetchTrip, 
        fetchUserTrips, 
        makeNewTrip, 
        updateTrip, 
        deleteTrip } from '../../actions/trip_actions';

// const mapStateToProps = state => ({
  
// });

const mapDispatchToProps = dispatch => ({
  getTrip: id => dispatch(fetchTrip(id)),
  getUserTrips: userId => dispatch(fetchUserTrips(userId)),
  makeNewTrip: trip => dispatch(makeNewTrip(trip)),
  updateTrip: trip => dispatch(updateTrip(trip)),
  deleteTrip: trip => dispatch(deleteTrip(trip))
});

export default connect(null, mapDispatchToProps)(Backpack);