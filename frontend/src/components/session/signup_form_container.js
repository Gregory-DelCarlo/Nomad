import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
// import SignUpForm from './signup_form';
import SignUpForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session),
    formType: 'signup'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignupForm);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)