import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ParksDropDownContainer from '../dropdowns/parks_dropdown_container';
import Modal from '../modal/modal';
import logo from '../../assets/images/nomad-logo-long.png';
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
        <div className="dropdown-profile">
          <button  className="user-icon">
            <GrUserWorker size="28px" />
          </button>
            <div className='dropdown-links'>
                <div className="dropdown-greeting">Hi, {this.props.currentUser.username}!</div>
                <div className="profile-link"><Link className='prof-links' to={`/user/profile`}>Profile</Link></div>
            <div className="trips-link"><Link className='prof-links' to={`/trips`}>Trips</Link></div>
            <div className='trips-link'><Link className='prof-links' to='/maps' >Maps</Link></div>
                <button  className="auth-btn" onClick={this.logoutUser}>Logout</button>
            </div>
          <div>
          </div>
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
              { this.props.loggedIn ? this.navContainer() : this.sessionContainer() }
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);