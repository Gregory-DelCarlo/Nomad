import {
    RECEIVE_PARK
} from '../actions/park_actions';

const currentParkReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PARK:
            nextState['currentPark'] = action.parkrid;
            return nextState;
        default:
            return state;
    }
};

export default currentParkReducer;