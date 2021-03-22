import { RECEIVE_TRIP, 
        RECEIVE_USER_TRIPS, 
        RECEIVE_NEW_TRIP,
        RECEIVE_TRIP_UPDATE,
        DELETE_TRIP } from '../actions/trip_actions';

const TripsReducer = (state = {trips: [], tripsPulled: false}, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TRIP:
      newState[action.trip.id] = action.trip.data;
      return newState;
    case RECEIVE_USER_TRIPS:
      return {trips: action.trips.data, tripsPulled: true};
    case RECEIVE_NEW_TRIP:
      return {trips: [...newState.trips, action.trip.data]}
    case RECEIVE_TRIP_UPDATE:
      newState[action.trip.id] = action.trip.data;
      return newState
    case DELETE_TRIP:
      return {
        trips: newState.trips.filter(trip => trip._id !== action.trip.data._id)
      }
    default:
      return state;
  }
};

export default TripsReducer;