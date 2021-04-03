import Calendar from './calendar';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import  {fetchUserTrips} from '../../actions/trip_actions';


const mSTP = (state) => {
    return ({
        userId: state.session.user.id,
        trips: Object.values(state.backpack.trips).map(
            ((trip) => {

                return ({
                    id: trip._id,
                    title: trip.title,
                    start: trip.startDate,
                    end: trip.endDate,
                    backgroundColor: "grey"

                })
            })
        ) 
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchUserTrips: userId => dispatch(fetchUserTrips(userId)),
        clearErrors: () => dispatch(clearErrors()),
    })
}




export default connect(mSTP, mDTP)(Calendar)