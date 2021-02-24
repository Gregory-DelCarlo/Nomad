import { combineReducers } from 'redux';
import parksReducer from './parks_reducer';


const entitiesReducer = combineReducers({
    parks: parksReducer
});

export default entitiesReducer;