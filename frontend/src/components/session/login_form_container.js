import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
// import LoginForm from './login_form';
import LoginForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)