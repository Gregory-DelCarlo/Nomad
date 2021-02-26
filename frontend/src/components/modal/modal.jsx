import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.component = null;
//     this.handleKeyPress = this.handleKeyPress.bind(this)
//     this.handleMouseDown = this.handleMouseDown.bind(this)
//   }

//   selectComponent() {
//     switch (this.props.modal) {
//       case 'login':
//         this.component = <LoginFormContainer />;
//         break;
//       case 'signup':
//         this.component = <SignupFormContainer />;
//         break;
//       default:
//         this.component = null;
//         return null
//     }
//   }

//   handleKeyPress(e) {
//     if (e.key === "Escape") {
//       this.props.closeModal()
//     }
//   }

//   handleMouseDown(e) {
//     if (e.target.className === "modal-background") {
//       this.props.closeModal();
//     }
//   }

//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyPress);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyPress);
//   }

//   render() { 
//     if (!this.props.modal) {
//       this.component = null;
//       return null
//     }
//     this.selectComponent();
//     return(
//       <div className="modal-background" onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyPress}>
//         <div className="modal-child" onClick={e => e.stopPropagation()}>
//           { this.component }
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     modal: state.ui.modal
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     closeModal: () => dispatch(closeModal())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
          <div className='modal-form-header-wrapper'>
          <div className="modal-form-header">Nomad</div>
        </div>
          </Modal.Title>
        </Modal.Header> */}
      <Modal.Body>
        <LoginFormContainer></LoginFormContainer>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className='login-btn' variant="primary" onClick={() => setModalShow(true)}>Login</button>
      <button className='signup-btn' variant="primary" onClick={() => setModalShow(true)}>Sign Up</button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default App