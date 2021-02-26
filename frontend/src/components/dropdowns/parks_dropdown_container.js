import { connect } from 'react-redux';
import ParksDropdown from './parks_dropdown';
import { getParks, receivePark } from '../../actions/park_actions'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        parks: state.entities.parks
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // debugger
    return {
        getParks: () => dispatch(getParks()),
        receivePark: parkrid => dispatch(receivePark(parkrid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParksDropdown);