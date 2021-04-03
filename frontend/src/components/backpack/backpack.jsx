import React from 'react';
import Start from './start';
import DateLocation from './date_location';
//test components
import Team from './team';
import Supplies from './supplies';
import Review from './review';
import '@fortawesome/fontawesome-free/js/all.js';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'start',
      numItems: 0,
      title: '',
      team: [],
      food: [],
      equipment: [],
      startDate: '',
      endDate: '',
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
    this.saveTrip = this.saveTrip.bind(this);
    this.addDateLocation = this.addDateLocation.bind(this);
    this.clearTrip = this.clearTrip.bind(this)
    this.setTitle = this.setTitle.bind(this);
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

  setTitle(title) {
    this.setState( {title: title} )
  }

  addDateLocation(newPage, itemNum, startDate, endDate, trailName, parkId) {
    const splitStartDate = startDate.split("T");
    const newStartDate = splitStartDate[0];
    const splitEndDate = endDate.split("T");
    const newEndDate = splitEndDate[0];

    this.setState({currentPage: newPage, 
                  numItems: itemNum, 
                  startDate: newStartDate,
                  endDate: newEndDate, 
                  trailName: trailName, 
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

  saveTrip(){
    const trip = {
      user: this.props.userId,
      title: this.state.title,
      team: this.state.team,
      food: this.state.food,
      equipment: this.state.equipment,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      parkId: this.state.parkId,
      trailName: this.state.trailName
    }
    this.props.makeNewTrip(trip);
    this.clearTrip()
    this.props.history.push('/trips')
  }

  clearTrip() {
    this.setState({
      currentPage: 'start',
      numItems: 0,
      title: '',
      team: [],
      food: [],
      equipment: [],
      startDate: '',
      endDate: '',
      parkId: '',
      trailName: ''
    })
  }

  getItems() {
    const itemNum = this.state.numItems;
    if (itemNum > 0) {
      const itemList = [
        <li 
          key="1"
          className="location-item"
          slide={this.state.numItems}
        >
          <p className="item-label">Time &amp; Location</p>
          <div onClick={() => this.changeView("time and location form")}>
            <i className='fas fa-pencil-alt'/>
          </div>
        </li>, 
        <li 
          key="2"
          className="team-item"
          slide={this.state.numItems}
        >
          <p className="item-label">Team</p>
          <div onClick={() => this.changeView("team form")}>
            <i className='fas fa-pencil-alt' />
          </div>
        </li>, 
        <li 
          key="3"
          className="supplies-item"
          slide={this.state.numItems}
        >
          <p className="item-label">Supplies</p>
          <div onClick={() => this.changeView("supplies form")}>
            <i className='fas fa-pencil-alt'/>
          </div>
        </li>
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
        <DateLocation 
          clickAddItem={this.addDateLocation} 
          currentPark={this.props.currentPark}
          state={this.state}
          parkRid={this.props.currentParkRid}
        />
      )
    } else if (this.state.currentPage === 'team form') {
      return (
        <Team 
          clickAddItem={this.addTeam}
          state={this.state} 
        />
      )
    } else if (this.state.currentPage === 'supplies form') {
      return (
        <Supplies 
          clickAddItem={this.addSupplies}
          state={this.state} 
        />
        )
      } else if (this.state.currentPage === 'review') {
      return (
        <Review
          reviewBackpack={this.state}
          saveTrip={this.saveTrip}
          changeView={this.changeView}
          clickAddItem={this.setTitle}
          clearTrip={this.props.clearTrip}
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