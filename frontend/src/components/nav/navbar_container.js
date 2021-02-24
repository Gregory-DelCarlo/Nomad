import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)