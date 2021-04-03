import { connect } from 'react-redux';
import { getParks, receivePark } from '../../actions/park_actions';
import { fetchWeather } from '../../actions/weather_actions';
import Maps from './maps';

const mapStateToProps = (state) => {
    return ({
        parkRid: state.ui.currentPark ? state.entities.parks[state.ui.currentPark].rid : '',
        parks: state.entities.parks
    })
};

const mapDispatchToProps = (dispatch) => {
    return( {
        getParks: () => dispatch(getParks()),
        receivePark: parkId => dispatch(receivePark(parkId)),
        fetchWeather: park => dispatch(fetchWeather(park))
    })
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Maps);