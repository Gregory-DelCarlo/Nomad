import * as APIUtil from '../util/trips_api_util';

export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const RECEIVE_USER_TRIPS = "RECEIVE_USER_TRIPS";
export const RECEIVE_NEW_TRIP = "RECEIVE_NEW_TRIP";
export const RECEIVE_TRIP_UPDATE = "RECEIVE_TRIP_UPDATE";
export const DELETE_TRIP = "DELETE_TRIP";
export const CLEAR_TRIP = "CLEAR_TRIP";

const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

const receiveUserTrips = trips => ({
  type: RECEIVE_USER_TRIPS,
  trips
});

const receiveNewTrip = trip => ({
  type: RECEIVE_NEW_TRIP,
  trip
});

const receiveUpdatedTrip = updatedTrip => ({
  type: RECEIVE_TRIP_UPDATE,
  updatedTrip
});

const removeTrip = trip => ({
  type: DELETE_TRIP,
  trip
});

export const clearTrip = () => {
  return {
    type: CLEAR_TRIP
  }
}

export const fetchTrip = id => dispatch => (
  APIUtil.getTrip(id).then(trip => dispatch(receiveTrip(trip)))
);

export const fetchUserTrips = userId => dispatch => (
  APIUtil.getUserTrips(userId).then(trips => dispatch(receiveUserTrips(trips)))
);

export const makeNewTrip = trip => dispatch => (
  APIUtil.makeTrip(trip).then(trip => dispatch(receiveNewTrip(trip)))
);

export const updateTrip = trip => dispatch => (
  APIUtil.updateTrip(trip).then(trip => dispatch(receiveUpdatedTrip(trip)))
);

export const deleteTrip = trip => dispatch => (
  APIUtil.deleteTrip(trip._id).then(trip => dispatch(removeTrip(trip)))
);