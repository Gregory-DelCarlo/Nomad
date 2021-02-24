import {
    fetchParks, fetchPark 
} from '../util/park_utils';

export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_PARK = 'RECEIVE_PARK';

const receiveParks = parks => ({
    type: RECEIVE_PARKS,
    parks
})

const receivePark = park => ({
    type: RECEIVE_PARK,
    park
})


export const getParks = () => dispatch => (
    fetchParks().then(parks => dispatch(receiveParks(parks)))
);

export const getPark = parkId => dispatch => (
    fetchPark(parkId).then(park => dispatch(receivePark(park)))
);

