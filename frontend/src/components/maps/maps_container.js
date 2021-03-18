import { connect } from 'react-redux';
import { getParks } from '../../actions/park_actions';
import Maps from './maps';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return ({
        parkRid: state.entities.parks[state.ui.currentPark].rid
    })
};

// may not need
const mapDispatchToProps = (dispatch) => {
    return {
        getParks: () => dispatch(getParks())
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Maps);