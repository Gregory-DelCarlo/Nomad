import { connect } from 'react-redux';
import Backpack from './backpack';
import { fetchTrip, 
        fetchUserTrips, 
        makeNewTrip, 
        updateTrip, 
        deleteTrip } from '../../actions/trip_actions';
import {getParks} from '../../actions/park_actions';

const mapStateToProps = state => {
  // debugger
  return ({
  userId: state.session.user.id,
  currentPark: state.ui.currentPark,
  parks: state.entities.parks
})};

const mapDispatchToProps = dispatch => ({
  getTrip: id => dispatch(fetchTrip(id)),
  getUserTrips: userId => dispatch(fetchUserTrips(userId)),
  makeNewTrip: trip => dispatch(makeNewTrip(trip)),
  updateTrip: trip => dispatch(updateTrip(trip)),
  deleteTrip: trip => dispatch(deleteTrip(trip)),
  getParks: () => dispatch(getParks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Backpack);