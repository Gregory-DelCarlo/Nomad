import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import { receivePark } from '../../actions/park_actions';
import Weather from './weather';

const mapStateToProps = (state) => {
  
  return {
    weather: state.entities.weather,
    currentPark: state.ui.currentPark ? state.entities.parks[state.ui.currentPark].name : '',
    currentParkId: state.ui.currentPark ? state.ui.currentPark : '',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: parkId => dispatch(fetchWeather(parkId)),
    receivePark: park_rid => dispatch(receivePark(park_rid)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)