import React from 'react';
class Review extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      title: this.props.reviewBackpack.title,
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    let field = document.getElementsByClassName("review-title")[0]
    field.style.width = field.value.length * 20 + 20 + "px";
  }

  handleChange(e) {
    this.props.reviewBackpack.title =  e.target.value
    this.setState({ title: e.target.value })
    this.handleLiveValidation(e.target.value.length)
    let field = document.getElementsByClassName("review-title")[0]
    field.style.width = field.value.length * 20 + 20 + "px";
  }

  handleLiveValidation(e) {
    let length = e
    if (length < 3 || length > 50) {
      this.setState( {error: 'Title must be between 3 and 50 characters'} )
    } else {
      this.setState( {error: null} )
    }
  }

  handleClick() {
    let field = document.getElementsByClassName("review-title")[0]
    field.focus()
  }

  handleValidation() {
    this.setState( {error: null} )
    let length = this.state.title.length;
    if (length < 3 || length > 50) {
      this.setState( {error: 'Title must be between 3 and 50 characters'} )
      return false
    }
    else return true
  }

  render() {
    return ( 
      <div className='review'>
        <div className='review-box'>
          <div className="review-field-wrapper">
            <div className="wow">
              <input 
                value={this.state.title} 
                onChange={this.handleChange}
                onBlur={this.handleValidation}
                className= {this.state.error !== null ? "review-title backpack-input review-error" : "review-title backpack-input"}
              />
              {this.state.error !== null ? <p className='backpack-input-error' id="review-title-error">{this.state.error}</p> : null}
            </div>

            <div onClick={this.handleClick}>
              <i className='fas fa-pencil-alt' id="review" />
            </div>
          </div>

          <div className='review-date-location'>
            <h2>Date and Location:</h2>
      
            <div className="review-field-wrapper">
              <ul>
                <li>Start Date: {this.props.reviewBackpack.startDate}</li>
                <li>End Date: {this.props.reviewBackpack.endDate}</li>
                <li>Location: {this.props.reviewBackpack.trailName}</li>
              </ul>
              <div onClick={() => this.props.changeView("time and location form")}>
                <i className='fas fa-pencil-alt' id="review"/>
              </div>
            </div>

          </div>
          <div className='review-team'>
            <h2>Team:</h2>
      
            <div className="review-field-wrapper">
              <ul className="team-list">
                {this.props.reviewBackpack.team.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
              <div onClick={() => this.props.changeView("team form")}>
                <i className='fas fa-pencil-alt' id="review" />
              </div>
            </div>
          </div>

          <div className='review-supplies'>
            <h2>Supplies:</h2>
              <div className="supply-lists">
                <div className='food-list'>
                
                  <label>Food</label>
                  <div className="review-field-wrapper">
                
                    <ul>
                      {this.props.reviewBackpack.food.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div onClick={() => this.props.changeView("supplies form")}>
                      <i className='fas fa-pencil-alt' id="review"/>
                    </div>
                  </div>
                      
                </div>
                      
                      
                <div className='equipment-list'>
                  <label>Equipment</label>
                      
                  <div className="review-field-wrapper">
                    <ul>
                      {this.props.reviewBackpack.equipment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div onClick={() => this.props.changeView("supplies form")}>
                      <i className='fas fa-pencil-alt' id="review"/>
                    </div>
                  </div>
                      
                </div>
              </div>
          </div>
          <button onClick={() => this.props.saveTrip()}>Save Trip</button>
        </div>
      </div>
    )
  }
}

export default Review;