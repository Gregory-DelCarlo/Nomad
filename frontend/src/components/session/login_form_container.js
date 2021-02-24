import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
// import LoginForm from './login_form';
import LoginForm from './session_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)