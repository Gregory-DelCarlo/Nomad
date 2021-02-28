import { connect } from 'react-redux';
import ParksDropdown from './parks_dropdown';
import { getParks, receivePark } from '../../actions/park_actions'

const mapStateToProps = (state) => {
    // debugger
    return {
        parks: state.entities.parks
    };
};

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        getParks: () => dispatch(getParks()),
        receivePark: park_rid => dispatch(receivePark(park_rid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParksDropdown);