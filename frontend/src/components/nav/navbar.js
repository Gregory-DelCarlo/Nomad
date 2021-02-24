import React from 'react';
import { Link, withRouter } from 'react-router-dom'

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
      <nav className="login-signup-nav">
        <div className="login-signup">
          <button className='login-btn' onClick={() => this.props.openModal('login')}>Login</button>
          <button className='signup-btn' onClick={() => this.props.openModal('signup')}>Create Account</button>
        </div>
      </nav>
    )
  }

  navContainer() {
    return(
      <div className="navbar-container">
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Nomad</h1>
        <br/>
        { this.props.loggedIn ? this.navContainer() : this.sessionContainer() }
       
      </div>
    );
  }
}

export default withRouter(NavBar);