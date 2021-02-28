import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import Weather from './weather';

const mapStateToProps = (state) => {
  
  return {
    weather: state.entities.weather,
    currentPark: state.ui.currentPark ? state.entities.parks[state.ui.currentPark].name : '',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: parkId => dispatch(fetchWeather(parkId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)