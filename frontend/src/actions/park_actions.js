import { fetchParks } from '../util/park_utils';

export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_PARK = 'RECEIVE_PARK';

const receiveParks = parks => ({
    type: RECEIVE_PARKS,
    parks
})

export const receivePark = parkId => ({
    type: RECEIVE_PARK,
    parkId
})


export const getParks = () => dispatch => (
    fetchParks().then(res => {
        const parks = {};
        res.data.forEach(park => {
            parks[park._id] = park
        });
        dispatch(receiveParks(parks));
    }).catch(err => err)
);

