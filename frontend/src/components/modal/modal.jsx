import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Modal from 'react-bootstrap/Modal'
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

let sessionForm

function MyVerticallyCenteredModal(props) {
  let component
  if (sessionForm === 'login') {
    component = <LoginFormContainer />;
  } else if (sessionForm === 'sign up') {
    component = <SignupFormContainer />;
  }
  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Body>
        {component}
      </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <button className='login-btn' 
      variant="primary" 
      onClick={() => {setModalShow(true); sessionForm = 'login'}}>Login</button>

      <button className='signup-btn' 
      variant="primary" 
      onClick={() => {setModalShow(true); sessionForm = 'sign up'}}>Sign Up</button>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App

// const selectSessionForm = (modal) => {
//   if (!modal) {
//     return null;
//   }
//   let component;
//   switch (modal) {
//     case 'login':
//       component = <LoginFormContainer />;
//       break;
//     case 'signup':
//       component = <SignupFormContainer />;
//       break;
//     default:
//       return component;
//   }
//   return component
// }


// const mapStateToProps = state => {
//   return {
//     modal: state.ui.modal
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     closeModal: () => dispatch(closeModal()),
//     openModal: modal => dispatch(openModal(modal)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);