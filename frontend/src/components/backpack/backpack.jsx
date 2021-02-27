import React from 'react';
import Start from './start';
//test components
import Test from './test';
import Team from './team';
import Supplies from './supplies';
import Review from './review';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'start',
      numItems: 0,
      title: '',
      team: [],
      food: [],
      equipment: []
    }
    this.getItems = this.getItems.bind(this);
    this.getView = this.getView.bind(this);
    this.changeView = this.changeView.bind(this);
    this.addTitle = this.addTitle.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.addSupplies = this.addSupplies.bind(this);
    this.addItem = this.addItem.bind(this);
    this.saveTrip = this.saveTrip.bind(this);
  }

  changeView(item) {
    this.setState({currentPage: item})
  }

  addItem(newPage, itemNum) {
    this.setState({currentPage: newPage, numItems: itemNum})
  }

  addTitle(newPage, itemNum, title) {
    this.setState({
      currentPage: newPage, numItems: itemNum, title: title
    })
  }

  addTeam(newPage, itemNum, team) {
    this.setState({
      currentPage: newPage, numItems: itemNum, team: team
    })
  }

  addSupplies(newPage, itemNum, food, equipment) {
    this.setState({
      currentPage: newPage, 
      numItems: itemNum,
      food: food,
      equipment: equipment
    })
  }

  saveTrip(){
    debugger
    const trip = {
      user: this.props.userId,
      title: this.state.title,
      team: this.state.team,
      food: this.state.food,
      equipment: this.state.equipment
    }
    this.props.makeNewTrip(trip);
    this.setState({ currentPage: 'start'})
  }

  getItems() {
    const itemNum = this.state.numItems;
    if (itemNum > 0) {
      const itemList = [
        <li 
          key="1"
          onClick={() => this.changeView("time and location")}
          className="location-item"
          slide={this.state.numItems}
        >Time and Location</li>, 
        <li 
          key="2"
          onClick={() => this.changeView("team")}
          className="team-item"
          slide={this.state.numItems}
        >Team</li>, 
        <li 
          key="3"
          onClick={() => this.changeView("supplies")}
          className="supplies-item"
          slide={this.state.numItems}
        >Supplies</li>
      ];
      const items = itemList.slice(0, itemNum);
      return (
        <ul className="item-list">
          {items.map(item => (
            item
          ))}
        </ul>
      )
    } else {
      return (
        <ul className="item-list">
        </ul>
      )
    }
  }

  getView() {
    if (this.state.currentPage === 'start') {
      return (
        <Start 
          clickAddItem={this.addTitle}
        />
      )
    } else if (this.state.currentPage === 'time and location form') {
      return (
        <Test 
          clickAddItem={() => this.addItem('team form', 1)} 
        />
      )
    } else if (this.state.currentPage === 'team form') {
      return (
        <Team 
          clickAddItem={this.addTeam} 
        />
      )
    } else if (this.state.currentPage === 'supplies form') {
      return (
        <Supplies 
          clickAddItem={this.addSupplies} 
        />
      )
    } else if (this.state.currentPage === 'review') {
      return (
        <Review
          reviewBackpack={this.state}
          saveTrip={this.saveTrip}
        />
      )
    }
  }

  render() {
    return (
      <div className="backpack-page">
        <div className="backpack">
          {this.getItems()}
        </div>
        <div className="backpack-view">
          {this.getView()}
        </div>
      </div>
    )
  }
}

export default Backpack;