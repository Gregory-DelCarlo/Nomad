import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ParksDropDownContainer from '../dropdowns/parks_dropdown_container';
import Modal from '../modal/modal';
import logo from '../../assets/images/nomad-logo.png';
import { GrUserWorker } from 'react-icons/gr'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);

    this.sessionContainer = this.sessionContainer.bind(this);
    this.navContainer = this.navContainer.bind(this);

  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    
  }

  sessionContainer() {
    
    return (
      <div className="auth-buttons">
        <Modal />
      </div>
    )
  }

  navContainer() {
    return(
      <div className="auth-buttons">
        <div className="user-icon">

          <Link to={`/user/${this.props.currentUser.id}`}
          ><GrUserWorker size="28px"/></Link>
        </div>
        <div>
          <button  className="auth-btn" onClick={this.logoutUser}>Logout</button>
        </div>

      </div>
      
    )
  }


  render() {
    return (
      <div>
        <nav className="navbar-container">
          <div className="navbar-content">
            <div className="nomad-header"><Link className='home-link' to='/'><img className='logo' src={logo} alt='nomad logo'/></Link></div>
              <ParksDropDownContainer />
              { this.props.loggedIn ? this.navContainer() : this.sessionContainer() }
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);