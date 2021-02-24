import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser 
      return newState
    case RECEIVE_USER_SIGN_IN:
      newState[action.currentUser.id] = action.currentUser 
      return newState
    default:
      return oldState
  }
}

export default userReducer