import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Modal from 'react-bootstrap/Modal';

let sessionForm

function MyVerticallyCenteredModal(props) {
  let component = 'login' || null;
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
      <Modal.Header closeButton>
      </Modal.Header>

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
