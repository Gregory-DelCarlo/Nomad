import Calendar from './calendar';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import  {fetchUserTrips} from '../../actions/trip_actions';


const mSTP = (state) => {
    return ({
        userId: state.session.user.id,
        trips: Object.values(state.backpack.trips),
       
    })
}

const mDTP = (dispatch) => {
    return ({
        getUserTrips: userId => dispatch(fetchUserTrips(userId)),
        clearErrors: () => dispatch(clearErrors()),
    })
}




export default connect(mSTP, mDTP)(Calendar)