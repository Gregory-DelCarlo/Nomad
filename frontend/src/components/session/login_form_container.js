import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './session_form';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'Login'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(login(user)),
    demoForm: (demo) => dispatch(login(demo)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)