import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      password2: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoAttempt = false;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then( () => {
      if (this.props.errors.length === 0) this.props.closeModal()
    });
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

<<<<<<< HEAD
  // This prevents auto login of the demo user on the enter key
  // Note that the getElementsByClassName method returns an array-like object
  handleEnter(e) {
    
    if (e.key === "Enter") {
      e.preventDefault();
    } else {
      this.demoLogin()
      document.getElementsByClassName("modal-form-submit-button")[0].click();
    }
  }

=======
>>>>>>> d2d68b9182127d387a35f2506bbc2132b843f506
  render() {
    const errors = {}
    this.props.errors.forEach( (error) => {
        errors[error.split(" ")[0]] = error
    })
    return (
      <div>
        <div className="modal-form-header">Nomad</div>
        <form className="modal-form" onSubmit={this.handleSubmit} >
          <div>
            <span>Username</span>
            <input type='text' 
              onChange={this.handleChange('username')} 
              // placeholder="Username" 
              value={this.state.username} />
            {errors['Username'] ? <div>{errors['Username']}</div> : null}
          </div>

          <div>
            <span>Password</span>
            <input type='password' 
              onChange={this.handleChange('password')} 
              // placeholder="Password" 
              value={this.state.password} />
            {errors['Password'] ? <div>{errors['Password']}</div> : null}
            {errors['Invalid'] ? <div>{errors['Invalid']}</div> : null}
          </div>
          {
            this.props.formType === 'Sign Up' ? 
            <div>
              <span>Confirm Password</span>
              <input type='password' 
              onChange={this.handleChange('password2')} 
              // placeholder="Password" 
              value={this.state.password2} />
            {errors['Passwords'] ? <div>{errors['Passwords']}</div> : null}
            </div> : ''
          }
          <button id='submit' type='submit'>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;