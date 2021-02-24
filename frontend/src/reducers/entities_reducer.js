import { combineReducers } from 'redux';
import parksReducer from './parks_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    parks: parksReducer,
    users: usersReducer
});

export default entitiesReducer;