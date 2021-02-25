import React from 'react';
import Start from './start';
import backpackImg from '../../assets/images/backpack.png';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'start',
      numItems: 3 //Change to 0 after testing
    }
    this.getItems = this.getItems.bind(this);
    this.changeView = this.changeView.bind(this);
    this.getView = this.getView.bind(this);
  }

  changeView(item) {
    this.setState({currentPage: item})
  }

  addItem(itemNum) {
    this.setState({numItems: itemNum})
  }

  getItems() {
    const itemNum = this.state.numItems;
    if (itemNum > 0) {
      const itemList = [
        <li onClick={() => this.changeView("time and location")}>Time and Location</li>, 
        <li onClick={() => this.changeView("team")}>Team</li>, 
        <li onClick={() => this.changeView("supplies")}>Supplies</li>
      ];
      const items = itemList.slice(0, itemNum);
      return (
        <ul className="item-list">
          {items.map(item => (
            item
          ))}
        </ul>
      )
    }
  }

  getView() {
    if (this.state.currentPage === 'start') {
      return (
        <Start clickFunction={() => this.changeView('time and location form')}/>
      )
    } else if (this.state.currentPage === 'time and location form') {
      return (
        <p>Button test success!</p>
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