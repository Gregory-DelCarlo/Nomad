import { combineReducers } from 'redux';
import parksReducer from './parks_reducer';
import usersReducer from './users_reducer';
import weatherReducer from './weather_reducer';

const entitiesReducer = combineReducers({
    parks: parksReducer,
    weather: weatherReducer,
    users: usersReducer
});

export default entitiesReducer;