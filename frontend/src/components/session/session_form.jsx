import React from 'react';
import logo from '../../assets/images/nomad-logo.png';
import { useHistory } from 'react-router-dom';

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
    this.loginDemo = this.loginDemo.bind(this)
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }
  
  loginDemo(e) {
    e.preventDefault();
    e.stopPropagation();
    const demo = {
      username: "Demo User",
      password: "123456"
    }
    this.props.demoForm(demo).then(() => {
      this.props.closeModal();
      this.props.history.push('/backpack');
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then( () => {
      if (this.props.errors.length === 0) {
        this.props.closeModal();
        this.props.history.push('/backpack');
      }
    });
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  render() {
    const errors = {}
    this.props.errors.forEach( (error) => {
        errors[error.split(" ")[0]] = error
    })
    return (
      <div className='modal-child'>
        <div className='modal-form-header-wrapper'>
          <div className="modal-form-header"><img className='modal-logo'src={logo} alt='nomad logo'/></div>
        </div>

        <form className="modal-form" onSubmit={this.handleSubmit} >
          <div>
            <span className='auth-form-field'>Username</span>
            <input className={errors['Username'] ? "auth-input error" : "auth-input"} 
              type='text' 
              onChange={this.handleChange('username')} 
              value={this.state.username} />
            {errors['Username'] ? <div className='auth-error'>{errors['Username']}</div> : null}
          </div>

          <div>
            <span className='auth-form-field'>Password</span>
            <input className={errors['Password'] ? "auth-input error" : "auth-input"}  
              type='password' 
              onChange={this.handleChange('password')}
              value={this.state.password} />
            {errors['Password'] ? <div className='auth-error'>{errors['Password']}</div> : null}
            {errors['User'] ? <div className='auth-error'>{errors['User']}</div> : null}
          </div>
          {
            this.props.formType === 'Sign Up' ? 
            <div>
              <span className='auth-form-field'>Confirm Password</span>
              <input className={errors['Passwords'] ? "auth-input error" : "auth-input"}  
                type='password' 
                onChange={this.handleChange('password2')}
                value={this.state.password2} />
            {errors['Passwords'] ? <div className='auth-error'>{errors['Passwords']}</div> : null}
            </div> : ''
          }

          <button className='auth-form-button'><span className='auth-form-field'>{this.props.formType}</span></button>
          <div className="auth-separator">
            or
          </div>
          <button className="auth-form-button" onClick={this.loginDemo}>Demo Sign In</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;