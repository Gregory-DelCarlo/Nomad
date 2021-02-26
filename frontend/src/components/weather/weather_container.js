import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import Weather from './weather';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: city => dispatch(fetchWeather(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)