import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ParksDropDownContainer from '../dropdowns/parks_dropdown_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else if (this.props.location.pathname === "/signup") {
      return (
        <Link className="login-link" to={'/login'}>Login</Link>
      )
    } else if (this.props.location.pathname === "/login") {
      return (
        <Link className="signup-link" to={'/signup'}>Signup</Link>
      )
    } else {
      return (
        <div>
          <Link className="signup-link" to={'/signup'}>Signup</Link>
          <Link className="login-link" to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  renderDropdown() {
    return <ParksDropDownContainer />;
  }

  render() {
    return (
      <div>
        <h1>Nomad</h1>
        { this.getLinks()}
        <br/>
        <button className='login-btn' onClick={() => this.props.openModal('login')} style={{color: 'green'}}>Login</button>
        <button className='signup-btn' onClick={() => this.props.openModal('signup')}>Create Account</button>
        <div onClick={this.renderDropdown}>Dropdown</div>
      </div>
    );
  }
}

export default withRouter(NavBar);