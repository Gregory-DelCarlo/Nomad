import { connect } from 'react-redux';
import { receiveWeather } from '../../actions/weather_actions';
import Weather from './weather';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: city => dispatch(receiveWeather(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)