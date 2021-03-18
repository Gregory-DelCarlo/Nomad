import React from 'react';

class Supplies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      food: [],
      equipment: [],
      foodItem: '',
      equipmentItem: '',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleAddEquipment = this.handleAddEquipment.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
    this.clearErrors = this.clearErrors.bind(this)
  }
  
  // componentDidMount() {
  // }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.clearErrors();
    if (this.handleValidations()) {
      this.props.clickAddItem('review', 3, this.state.food, this.state.equipment)
    }
  }

  handleAddFood(e) {
    e.preventDefault();
    const joined = this.state.food.concat(this.state.foodItem);
    this.setState({ food: joined, foodItem: '' })
  }

  handleAddEquipment(e) {
    e.preventDefault();
    const joined = this.state.equipment.concat(this.state.equipmentItem);
    this.setState({ equipment: joined, equipmentItem: '' })
  }

  clearErrors() {
    this.setState( {error: {}} )
  }

  handleValidations() {
    let foodItem = this.state.foodItem.length;
    let equipmentItem = this.state.equipmentItem.length;

    let validForm = true;
    let errors = {}

    if (foodItem === 0){
      errors["Food"] = "Food item cannot be blank"
      validForm = false;
    } 
    if (equipmentItem === 0) {
      errors["Equipment"] = "Equipment cannot be blank"
      validForm = false;
    }

    this.setState( {errors: errors} )
    return validForm
  }

  render() {
    // debugger
    const food = this.state.food;
    const equipment = this.state.equipment;
    let errors = Object.values(this.state.errors);
    if (errors) errors.forEach( error => {
      errors[error.split(" ")[0]] = error
    })
    return(
      <div className="supplies">
        <div className="supplies-box">
          <h1>Add your supplies</h1>
          <form className="food-form">
            <label>Enter a food item:</label>
            <input 
              type="text"
              onChange={this.handleChange('foodItem')}
              // className="backpack-input"
              className= {errors["Food"] ? "backpack-input error" : "backpack-input"}
              value={this.state.foodItem}
            />
            { errors["Food"] ? <div className='backpack-input-error'>{errors["Food"]}</div> : null}

            <button onClick={this.handleAddFood}>Add</button>
          </form>
          <form className="equipment-form">
            <label>Enter a piece of equipment:</label>
            <input 
              type="text"
              onChange={this.handleChange('equipmentItem')}
              className= {errors["Equipment"] ? "backpack-input error" : "backpack-input"}
              value={this.state.equipmentItem}
            />
            { errors["Equipment"] ? <div className='backpack-input-error'>{errors["Equipment"]}</div> : null}
            <button onClick={this.handleAddEquipment}>Add</button>
          </form>
          <div className="food-form-list">
            <label>Your Food</label>
            <ul>
              {food.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="equipment-form-list">
            <label>Your Equipment</label>
            <ul>
              {equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button onClick={this.handleSubmit}>Review</button>
        </div>
      </div>
    )
  }
}

export default Supplies;