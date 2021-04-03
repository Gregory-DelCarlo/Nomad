import React from 'react';

class Supplies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      food: this.props.state.food,
      equipment: this.props.state.equipment,
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

  handleChange(field) {
    return e => {
      this.handleValidations()
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clickAddItem('review', 3, this.state.food, this.state.equipment)
  }

  handleAddFood(e) {
    e.preventDefault();
    
    let clearField = Object.assign({}, this.state.errors, {"Food": null})
    this.clearErrors(clearField)
    if (this.handleValidations("foodItem")) {
      const joined = this.state.food.concat(this.state.foodItem);
      this.setState({ food: joined, foodItem: '' })
    }

  }

  handleAddEquipment(e) {
    e.preventDefault();

    let clearField = Object.assign({}, this.state.errors, {"Equipment": null})
    this.clearErrors(clearField)
    if (this.handleValidations("equipmentItem")) {
      const joined = this.state.equipment.concat(this.state.equipmentItem);
      this.setState({ equipment: joined, equipmentItem: '' })
    }
  }

  clearErrors(state) {
    this.setState( {error: state} )
  }

  handleValidations(field) {
    let foodItem;
    let equipmentItem;
    if (field === "foodItem") foodItem = this.state.foodItem.length;
    if (field === "equipmentItem") equipmentItem = this.state.equipmentItem.length;
    
    let validForm = true;
    let errors = {}

    if (foodItem === 0){
      errors["Food"] = "Food item cannot be blank"
      validForm = false;
    } 
    else if (foodItem > 20) {
      errors["Food"] = "Food item cannot be over 20 characters"
      validForm = false;
    }
    if (equipmentItem === 0) {
      errors["Equipment"] = "Equipment cannot be blank"
      validForm = false;
    }
    else if (equipmentItem > 20) {
      errors["Eequipment"] = "Equipment cannot be over 20 characters"
      validForm = false;
    }

    this.setState( {errors: errors} )
    return validForm
  }

  removeItem(form, index) {
    if (form === "food") {
      let temp = this.state.food
      temp.splice(index, 1)
      this.setState({food: temp})
    } else {
      let temp = this.state.equipment
      temp.splice(index, 1)
      this.setState({equipment: temp})
    }
  }

  render() {
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
                <li key={index}>
                  <span className="form-list-item">{item}</span>
                  <button className="clear-item-btn" onClick={() => this.removeItem("food", index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="equipment-form-list">
            <label>Your Equipment</label>
            <ul>
              {equipment.map((item, index) => (
                <li key={index}>
                  <span className="form-list-item">{item}</span>
                  <button className="clear-item-btn" onClick={() => this.removeItem("equipment", index)}>X</button>
                  </li>
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