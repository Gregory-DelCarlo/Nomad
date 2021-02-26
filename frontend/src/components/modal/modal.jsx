import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Body>
        <SignupFormContainer />
      </Modal.Body>
    </Modal>
  );
}

const open = dispatch => {
  return({
    openModal: modal => dispatch(openModal(modal)),
  })

}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className='login-btn' 
      variant="primary" 
      onClick={() => {setModalShow(true); 
        open('login')}}>Login</button>

      <button className='signup-btn' 
      variant="primary" 
      onClick={() => {setModalShow(true)
        open('signup')}}>Sign Up</button>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;