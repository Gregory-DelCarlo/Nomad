import React from 'react';
import Start from './start';
//test components
import Test from './test';
import Test2 from './test2';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'start',
      numItems: 0 //Change to 0 after testing
    }
    this.getItems = this.getItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.getView = this.getView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView(item) {
    this.setState({currentPage: item})
    console.log(this.state.numItems) //remove after testing
    console.log(this.state.currentPage) //remove after testing
  }

  addItem(newPage, itemNum) {
    debugger
    this.setState({currentPage: newPage, numItems: itemNum})
    console.log(this.state.numItems) // remove after testing
    console.log(this.state.currentPage) // remove after testing
  }
  // addItem(itemNum) {
  //   this.setState({numItems: itemNum})
  //   console.log(this.state.numItems) // remove after testing
  //   console.log(this.state.currentPage) // remove after testing
  // }



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
        <Start clickAddItem={() => this.addItem('time and location form', 1)}/>
      )
    } else if (this.state.currentPage === 'time and location form') {
      return (
        <Test 
          clickAddItem={() => this.addItem('team form', 2)} 
          // clickAddItem={() => this.addItem(1)} 
        />
      )
    } else if (this.state.currentPage === 'team form') {
      return (
        <Test2 
          clickAddItem={() => this.addItem('supplies form', 3)} 
          // clickAddItem={() => this.addItem(2)} 
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