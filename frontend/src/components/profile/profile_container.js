import Profile from './profile';
import {clearErrors} from '../../actions/session_actions';
import {connect} from 'react-redux';


const mSTP = (state) => {
    return ({
        currentUser: state.session.user
    })
}

const mDTP = (dispatch) => {
    return ({
    
        clearErrors: () => dispatch(clearErrors()),
    })
}




export default connect(mSTP, mDTP)(Profile)