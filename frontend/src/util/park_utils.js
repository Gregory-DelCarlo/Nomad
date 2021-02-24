import axios from 'axios';

export const fetchParks = () => {
    return axios.get('/api/parks/');
};

export const fetchPark = (parkId) => {
    return axios.get(`/api/parks/${parkId}`);
};

