import React from 'react';
import Start from './start';
import DateLocation from './date_location';
//test components
import Test from './test';
import Team from './team';
import Supplies from './supplies';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'start',
      numItems: 0,
      user: this.props.userId,
      title: '',
      team: [],
      food: [],
      equipment: [],
      date: '',
      parkId: '',
      trailName: ''
    }
    this.getItems = this.getItems.bind(this);
    this.getView = this.getView.bind(this);
    this.changeView = this.changeView.bind(this);
    this.addTitle = this.addTitle.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.addSupplies = this.addSupplies.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addDateLocation = this.addDateLocation.bind(this);
  }

  componentWillMount() {
    this.props.getParks();
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

  addDateLocation(newPage, itemNum, date, trailName, parkId) {
    this.setState({currentPage: newPage, 
                  numItems: itemNum, 
                  date, 
                  trailName, 
                  parkId
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
        <DateLocation clickAddItem={this.addDateLocation} currentPark={this.props.currentPark} parks={this.props.parks}/>
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