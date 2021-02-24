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
    // this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal);
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
            {errors['Password'] ? <div>{errors['Password']}</div> : null}
            {errors['Invalid'] ? <div>{errors['Invalid']}</div> : null}
          </div>
          {
            this.props.formType === 'signup' ? 
            <div>
              <input type='password' 
              onChange={this.handleChange('password2')} 
              placeholder="Password" 
              value={this.state.password2} />
            {errors['Passwords'] ? <div>{errors['Passwords']}</div> : null}
            </div> : ''
          }
          <button type='submit'>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm