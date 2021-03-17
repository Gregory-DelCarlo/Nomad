import { RECEIVE_TRIP, 
        RECEIVE_USER_TRIPS, 
        RECEIVE_NEW_TRIP,
        RECEIVE_TRIP_UPDATE,
        DELETE_TRIP } from '../actions/trip_actions';

const TripsReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TRIP:
      newState[action.trip.id] = action.trip.data;
      return newState;
    case RECEIVE_USER_TRIPS:
      newState = action.trips.data;
      return newState;
    case RECEIVE_NEW_TRIP:
      newState[action.trip.id] = action.trip.data;
      return newState
    case RECEIVE_TRIP_UPDATE:
      newState[action.trip.id] = action.trip.data;
      return newState
    case DELETE_TRIP:
      delete newState[action.trip.id];
      return newState;
    default:
      return state;
  }
};

export default TripsReducer;