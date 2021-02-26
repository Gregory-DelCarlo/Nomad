import React from 'react';
import logo from '../../assets/images/nomad-logo.png';


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

  render() {
    const errors = {}
    this.props.errors.forEach( (error) => {
        errors[error.split(" ")[0]] = error
    })
    return (
      <div className='modal-child'>
        <div className='modal-form-header-wrapper'>
          <div className="modal-form-header"><img className='logo'src={logo}/></div>
        </div>
        <form className="modal-form" onSubmit={this.handleSubmit} >
          <div>
            <span className='auth-form-field'>Username</span>
            <input className={Object.keys(errors).length ? "auth-input error" : "auth-input"} 
              type='text' 
              onChange={this.handleChange('username')} 
              value={this.state.username} />
            {errors['Username'] ? <div className='auth-error'>{errors['Username']}</div> : null}
          </div>

          <div>
            <span className='auth-form-field'>Password</span>
            <input className={Object.keys(errors).length ? "auth-input error" : "auth-input"}  
              type='password' 
              onChange={this.handleChange('password')}
              value={this.state.password} />
            {errors['Password'] ? <div className='auth-error'>{errors['Password']}</div> : null}
          </div>
          {
            this.props.formType === 'Sign Up' ? 
            <div>
              <span className='auth-form-field'>Confirm Password</span>
              <input className={Object.keys(errors).length ? "auth-input error" : "auth-input"}  
                type='password' 
                onChange={this.handleChange('password2')}
                value={this.state.password2} />
            {errors['Passwords'] ? <div className='auth-error'>{errors['Passwords']}</div> : null}
            </div> : ''
          }
          {errors['User'] ? <div className='auth-error'>{errors['User']}</div> : null}

          <button id='submit' type='submit'><span className='auth-form-field'>{this.props.formType}</span></button>
        </form>
      </div>
    )
  }
}

export default SessionForm;