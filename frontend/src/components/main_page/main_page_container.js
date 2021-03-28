import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import MainPage from './main_page';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
  }
};
  
export default connect(mapStateToProps)(MainPage);