import React from 'react';

class Supplies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      food: [],
      equipment: [],
      foodItem: '',
      equipmentItem: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleAddEquipment = this.handleAddEquipment(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clickAddItem('review', 3, this.state.food, this.state.equipment)
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

  render() {
    const food = this.state.food;
    const equipment = this.state.equipment;
    return(
      <div>
        <h1>Add your supplies!</h1>
        <form className="food-form" onSubmit={this.handleAddFood}>
          <label>Enter a food item:</label>
          <input 
            type="text"
            onChange={this.handleChange('foodItem')}
            value={this.state.foodItem}
          />
          <button type="submit">Add</button>
        </form>
        <form className="equipment-form" onSubmit={this.handleAddEquipment}>
          <label>Enter a piece of equipment:</label>
          <input 
            type="text"
            onChange={this.handleChange('equipmentItem')}
            value={this.state.equipmentItem}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <label>Your Food</label>
          <ul>
            {food.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <label>Your Equipment</label>
          <ul>
            {equipment.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <button onClick={this.handleSubmit}>Review</button>
      </div>
    )
  }
}

export default Supplies;