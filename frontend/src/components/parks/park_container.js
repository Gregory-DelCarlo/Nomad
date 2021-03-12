import { connect } from 'react-redux';
import { getParks } from '../../actions/park_actions';
import Park from './park';

const mapStateToProps = (state, ownProps) => {
    return ({
        park: state.entities.parks[ownProps.match.params.parkId]
    })
};

// may not need
const mapDispatchToProps = (dispatch) => {
    return {
        getParks: () => dispatch(getParks())
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Park);