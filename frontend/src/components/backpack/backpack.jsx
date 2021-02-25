import React from 'react';
import Start from './start';
//test components
import Test from './test';
import Test2 from './test2';
import Test3 from './test3';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'start',
      numItems: 0
    }
    this.getItems = this.getItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.getView = this.getView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView(item) {
    this.setState({currentPage: item})
  }

  addItem(newPage, itemNum) {
    this.setState({currentPage: newPage, numItems: itemNum})
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
        <Start clickAddItem={() => this.addItem('time and location form', 0)}/>
      )
    } else if (this.state.currentPage === 'time and location form') {
      return (
        <Test 
          clickAddItem={() => this.addItem('team form', 1)} 
        />
      )
    } else if (this.state.currentPage === 'team form') {
      return (
        <Test2 
          clickAddItem={() => this.addItem('supplies form', 2)} 
        />
      )
    } else if (this.state.currentPage === 'supplies form') {
      return (
        <Test3 clickAddItem={() => this.addItem('', 3)} />
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