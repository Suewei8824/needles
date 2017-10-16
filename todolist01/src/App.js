import React, { Component } from 'react';
import { Input, List, State } from './components';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        text: "hello",
        status: "active"
      },
      {
        text: "world",
        status: "deleted"
      }],
      filterOption: "all"
    }
  }

  /**
   * 删除元素操作
   * @param {*} index 元素下标
   */
  onDelete(index) {
    let { items } = this.state;
    items[index].status = "deleted";
    this.setState({
      items
    })
  }

  /**
   * 
   * @param {*} status all deleted active
   */
  filterItems() {
    let { items, filterOption } = this.state;
    switch (filterOption) {
      case "all":
        return items;
      case "deleted":
        return items.filter(item => item.status === "deleted")
      case "active": 
        return items.filter(item => item.status === "active")
    }
  }

  render() {
    let { items } = this.state;
    return (
      <div>
        <Input addItem={(val) => { items.push({ text: val, status: "active" }); this.setState({ items }) }} />
        <List items={this.filterItems()} onDelete={(index) => this.onDelete(index)} />
        <State onFilter={ status => this.setState({ filterOption: status }) } />
      </div>
    )
  }
}

export default App;
