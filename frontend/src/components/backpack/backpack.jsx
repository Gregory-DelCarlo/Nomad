import React from 'react';

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'main',
      numItems: 0
    }
    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    const itemNum = this.state.numItems;
    if (itemNum > 0) {
      const itemList = ["Time & Location", "Team", "Supplies"];
      const items = itemList.slice(0, itemNum);
      return (
        <ul className="item-list">
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      )
    }
  }



  render() {
    return (
      <div className="backpack-page">
        <div className="backpack">
          {this.getItems()}
        </div>
      </div>
    )
  }
}

export default Backpack;