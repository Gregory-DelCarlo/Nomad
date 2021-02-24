import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.demoAttempt = false;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.demoAttempt ? this.props.login(this.state).then(this.props.closeModal) : this.props.action(this.state).then(this.props.closeModal);
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  // This prevents auto login of the demo user on the enter key
  // Note that the getElementsByClassName method returns an array-like object
  handleEnter(e) {
    
    if (e.key == "Enter") {
      e.preventDefault();
    } else {
      this.demoLogin()
      document.getElementsByClassName("modal-form-submit-button")[0].click();
    }
  }

  render() {
    const errors = {}
    this.props.errors.forEach( (error) => {
        errors[error.split(" ")[0]] = error
    })
    return (
      <div>
        <form className="modal-form" onSubmit={this.handleSubmit} >
          <div>
            <input type='text' 
              onChange={this.handleChange('username')} 
              placeholder="Username" 
              value={this.state.username} />
            {errors['Username'] ? <div>{errors['Username']}</div> : null}
          </div>

          <div>
            <input type='password' 
              onChange={this.handleChange('password')} 
              placeholder="Password" 
              value={this.state.password} />
            {errors['Password'] ? <div className="credential-errors-ul">{errors['Password']}</div> : null}
            {errors['Invalid'] ? <div className="credential-errors-ul">{errors['Invalid']}</div> : null}
          </div>

          <button className="modal-form-submit-button" type='submit'>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm