import { connect } from 'react-redux';
import { getParks } from '../../actions/park_actions';
import Maps from './maps';

const mapStateToProps = (state) => {
    return ({
        parkRid: state.ui.currentPark ? state.entities.parks[state.ui.currentPark].rid : ''
    })
};

const mapDispatchToProps = (dispatch) => {
    return( {
        getParks: () => dispatch(getParks())
    })
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Maps);