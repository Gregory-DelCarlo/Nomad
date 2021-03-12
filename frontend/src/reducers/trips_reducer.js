import { RECEIVE_TRIP, 
        RECEIVE_USER_TRIPS, 
        RECEIVE_NEW_TRIP,
        RECEIVE_TRIP_UPDATE,
        DELETE_TRIP } from '../actions/trip_actions';

const TripsReducer = (state = {user: {}, new: undefined}, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TRIP:
      // newState.current = action.trip;
      newState.user[action.trip.id] = action.trip
      return newState;
    case RECEIVE_USER_TRIPS:
      newState.user = action.trips;
      return newState;
    case RECEIVE_NEW_TRIP:
      newState.new = action.trip
      return newState
    case RECEIVE_TRIP_UPDATE:
      newState.user[action.trip.id] = action.trip
      return newState
    case DELETE_TRIP:
      delete nextState[action.trip.id];
      return nextState;
    default:
      return state;
  }
};

export default TripsReducer;