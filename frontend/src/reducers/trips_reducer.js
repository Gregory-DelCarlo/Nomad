import { RECEIVE_TRIP, 
        RECEIVE_USER_TRIPS, 
        RECEIVE_NEW_TRIP,
        RECEIVE_TRIP_UPDATE,
        DELETE_TRIP,
        CLEAR_TRIP } from '../actions/trip_actions';

const defaultState = {
  trips: [],
  tripsPulled: false,
}

const TripsReducer = (state = defaultState, action) =>{
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
    case CLEAR_TRIP:
      return defaultState
    case DELETE_TRIP:
      return {
        trips: newState.trips.filter(trip => trip._id !== action.trip.data._id)
      }
    default:
      return state;
  }
};

export default TripsReducer;