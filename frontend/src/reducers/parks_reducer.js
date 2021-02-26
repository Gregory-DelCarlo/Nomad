import {
    RECEIVE_PARKS, RECEIVE_PARK
} from '../actions/park_actions';

const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PARKS:
            return action.parks;
        // case RECEIVE_PARK:
        //     console.log(action.park);
        //     nextState[action.park._id] = action.park;
        //     return nextState;
        default:
            return state;
    }
};

export default parksReducer;