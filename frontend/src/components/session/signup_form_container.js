import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),

    closeModal: () => dispatch(closeModal()),
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignupForm);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)