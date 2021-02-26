import React from 'react';
import Profile from './profile';
import {getUser} from '../../actions/user_actions';
import {clearErrors} from '../../actions/session_actions';
import {connect} from 'react-redux';


const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        getUser: (id) => dispatch(getUser(id)),
        clearErrors: () => dispatch(clearErrors()),
    })
}




export default connect(mSTP, mDTP)(Profile)