import React from 'react';

class Team extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      team: [],
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMember = this.handleAddMember.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clickAddItem('supplies form', 2, this.state.team)
  }

  handleAddMember(e) {
    e.preventDefault();
    const joined = this.state.team.concat(this.state.name);
    this.setState({ team: joined, name: '' })
  }

  render() {
    const team = this.state.team;
    return (
      <div>
        <h1>Add your team!</h1>
        <form className="team-form" onSubmit={this.handleAddMember}>
          <label>Enter the name of a team member:</label>
          <input 
            type="text"
            onChange={this.handleChange('name')}
            value={this.state.name}
          />
          <button type='submit'>Add Team Member</button>
        </form>
        <div>
          <label>Your Team</label>
          <ul>
            {team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Team;