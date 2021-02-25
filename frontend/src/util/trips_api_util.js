import axios from 'axios';

export const getTrip = id => {
  return axios.get(`/api/trips/${id}`)
};

export const getUserTrips = userId => {
  return axios.get(`/api/trips/user/${userId}`)
};

export const makeTrip = tripData => {
  return axios.post('/api/trips/', tripData)
};

export const updateTrip = (id, newTripData) => {
  return axios.put(`/api/trips/update/${id}`, newTripData)
};

export const deleteTrip = id => {
  return axios.delete(`/api/trips/delete/${id}`)
};