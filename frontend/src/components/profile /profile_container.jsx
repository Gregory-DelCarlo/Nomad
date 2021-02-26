import React from 'react';
import Profile from './profile'

const mSTP = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUser],
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        getUser: (id) => dispatch(getUser(id)),
        clearErrors: () => dispatch(clearErrors()),
    })




export default connect(mSTP, mDTP)(Profile)