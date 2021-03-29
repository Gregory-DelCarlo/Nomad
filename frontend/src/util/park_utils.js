import axios from 'axios';

export const fetchParks = () => {
    return axios.get('/api/parks/');
};

