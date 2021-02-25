import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './session_form'
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session),
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)