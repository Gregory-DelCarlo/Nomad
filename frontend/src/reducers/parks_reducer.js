import {
    RECEIVE_PARKS, RECEIVE_PARK
} from '../actions/park_actions';

const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = state;
    switch (action.type) {
        case RECEIVE_PARKS:
            return action.parks;
        case RECEIVE_PARK:
            nextState[action.park.id] = action.park;
            return nextState;
        default:
            return state;
    }
};

export default parksReducer;