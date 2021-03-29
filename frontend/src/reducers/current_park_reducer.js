import { RECEIVE_PARK } from '../actions/park_actions';

const currentParkReducer = (state = '', action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PARK:
            return action.parkId;        
        default:
            return state;
    }
};

export default currentParkReducer;