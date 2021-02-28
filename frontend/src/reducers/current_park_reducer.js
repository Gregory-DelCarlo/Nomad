import { Strategy } from 'passport-jwt';
import { RECEIVE_PARK } from '../actions/park_actions';

const currentParkReducer = (state = '', action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PARK:
            return action.park_rid;        
        default:
            return state;
    }
};

export default currentParkReducer;