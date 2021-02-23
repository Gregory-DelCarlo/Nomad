import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
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
      <Link className="login-link" to={'/login'}>Login</Link>
    } else if (this.props.location.pathname === "/login") {
      <Link className="signup-link" to={'/signup'}>Signup</Link>
    } else {
      return (
        <div>
          <Link className="signup-link" to={'/signup'}>Signup</Link>
          <Link className="login-link" to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Nomad</h1>
        {this.props.location.pathname}
        { this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);