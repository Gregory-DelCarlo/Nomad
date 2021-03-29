import { connect } from 'react-redux';
import ParksDropdown from './parks_dropdown';
import { getParks, receivePark } from '../../actions/park_actions';
import { fetchWeather } from '../../actions/weather_actions';

const mapStateToProps = (state) => {
    return {
        parks: state.entities.parks,
        currentPark: state.ui.currentPark ? state.entities.parks[state.ui.currentPark] : '',
        currentParkId: state.ui.currentPark ? state.ui.currentPark : '',
        weather: state.entities.weather,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getParks: () => dispatch(getParks()),
        receivePark: parkId => dispatch(receivePark(parkId)),
        fetchWeather: park => dispatch(fetchWeather(park))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ParksDropdown);