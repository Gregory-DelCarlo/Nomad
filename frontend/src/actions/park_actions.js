import { fetchParks } from '../util/park_utils';

export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_PARK = 'RECEIVE_PARK';

const receiveParks = parks => ({
    type: RECEIVE_PARKS,
    parks
})

export const receivePark = park_rid => ({
    type: RECEIVE_PARK,
    park_rid
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

// export const getPark = parkId => dispatch => (
//     fetchPark(parkId).then(res => dispatch(receivePark(res.data)))
// );

