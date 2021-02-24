import { connect } from 'react-redux';
import ParksDropdown from './parks_dropdown';
import { getParks } from '../../actions/park_actions'

const mapStateToProps = state => {
    return {
        parks: state.entities.parks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getParks: () => dispatch(getParks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParksDropdown);